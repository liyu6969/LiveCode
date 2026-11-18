// Renders the real `CodeLiveTab` for PTC (`run_code`) file calls through a small
// hook runtime with effects and a fake workspace reader. The other PTC probe
// stops at the data layer; this one checks the panel a user actually sees:
//   - a write nested in a program is not the empty state;
//   - a settled nested edit keeps its changed-line marks;
//   - an edit whose original read raced the write still shows a diff.
// Run with `node dev/ptc-render-probe.cjs`.
const fs = require('fs')
const path = require('node:path')
const assert = require('node:assert/strict')

const src = fs.readFileSync(path.join(__dirname, '..', 'client.js'), 'utf8')

// A minimal Hooks runtime: state updates re-render, effects run on dep change,
// and timers only move when the probe advances the clock.
function createRuntime() {
  const hooks = []
  const timers = new Map()
  let cursor = 0
  let seq = 1
  let now = 0
  let dirty = false
  let lastProps = null
  let out = null
  let hookFn = null

  const React = {
    createElement: (type, props, ...children) => ({ type, props: props || {}, children }),
    useState(init) {
      const slot = cursor++
      if (hooks[slot] === undefined) hooks[slot] = { kind: 'state', value: typeof init === 'function' ? init() : init }
      const hook = hooks[slot]
      return [hook.value, next => {
        const value = typeof next === 'function' ? next(hook.value) : next
        if (Object.is(value, hook.value)) return
        hook.value = value
        dirty = true
      }]
    },
    useRef(value) {
      const slot = cursor++
      if (hooks[slot] === undefined) hooks[slot] = { kind: 'ref', current: value }
      return hooks[slot]
    },
    useEffect(fn, deps) {
      const slot = cursor++
      if (hooks[slot] === undefined) hooks[slot] = { kind: 'effect', fn, deps, previous: null, ran: false, cleanup: null }
      else { hooks[slot].fn = fn; hooks[slot].deps = deps }
    },
    useMemo(fn) { return fn() },
  }

  const sameDeps = (a, b) => a !== null && b !== null && a.length === b.length && a.every((v, i) => Object.is(v, b[i]))

  function runEffects() {
    for (const hook of hooks) {
      if (hook === undefined || hook.kind !== 'effect') continue
      if (hook.ran && sameDeps(hook.deps, hook.previous)) continue
      if (hook.cleanup !== null) hook.cleanup()
      hook.previous = hook.deps
      hook.ran = true
      hook.cleanup = hook.fn() || null
    }
  }

  function render(props) {
    lastProps = props
    for (let guard = 0; guard < 30; guard++) {
      dirty = false
      cursor = 0
      out = hookFn(props)
      if (!dirty) break
    }
    runEffects()
    return out
  }

  function advance(ms) {
    if (dirty) render(lastProps)
    const target = now + ms
    for (let guard = 0; guard < 10000; guard++) {
      let pick = null
      for (const entry of timers) {
        if (entry[1].at > target) continue
        if (pick === null || entry[1].at < pick[1].at) pick = entry
      }
      if (pick === null) break
      timers.delete(pick[0])
      now = pick[1].at
      pick[1].fn()
      if (dirty) render(lastProps)
    }
    now = target
    return out
  }

  global.setTimeout = (fn, delay) => { const id = seq++; timers.set(id, { at: now + Math.max(0, delay || 0), fn }); return id }
  global.clearTimeout = id => { timers.delete(id) }
  return { React, render, advance, setHook: fn => { hookFn = fn } }
}

const runtime = createRuntime()
global.window = {
  __ModuleLoader__: { load: () => {} },
  setCodingIntensity() {}, setCharacter() {}, setDrink() {}, setResting() {}, drinkCoffee() {},
}
global.document = { hidden: false, addEventListener() {}, removeEventListener() {}, querySelector: () => null, activeElement: null, body: {} }
// Pacing off keeps this probe on the settled view; the playback itself is
// covered by pacing-probe.
global.localStorage = { getItem: key => (key === 'dsh-code-live.pace' ? 'off' : null), setItem() {} }

let mod = null
global.window.__ModuleLoader__.load = m => { mod = m }
new Function('window', 'require', src)(global.window, name => {
  if (name === 'react') return runtime.React
  throw new Error('unexpected require ' + name)
})

const FILES = {
  'src/a.js': 'const a = 2\nconst b = 3',
  'src/race.js': 'foo bar',
  'src/new.js': 'one\ntwo',
}

let tabBody = null
const ctx = {
  effect: fn => { fn(); return () => {} },
  locale: { register: () => {}, bind: () => key => key },
  slots: {
    inject: (name, cb) => { cb(); return () => {} },
    register: (options, component) => { if (options.key === '@local/dsh-code-live') tabBody = component; return () => {} },
  },
  sidebarRightTabs: { register: () => () => {} },
  sidebarRight: { active: () => undefined, isExpanded: () => true, openTab: () => {} },
  remote: { workspaceFiles: { read: async (sessionId, filePath) => {
    const content = FILES[filePath] ?? ''
    return { ok: true, value: { text: content, lines: content === '' ? 0 : content.split('\n').length, eof: true } }
  } } },
}
mod.factory(name => { if (name === 'react') return runtime.React; throw new Error(name) }).apply(ctx)
assert.ok(tabBody !== null, 'tab body not registered')

/** A sealed argument view, the shape PTC subcalls carry. */
const args = fields => ({
  text: key => (typeof fields[key] === 'string' ? fields[key] : undefined),
  complete: () => true,
  has: key => Object.hasOwn(fields, key),
  value: key => fields[key],
  closed: () => true,
})

let clock = 1000
/** A nested call still running (`tool/ptc-dispatch-start`). */
function running(name, fields, filePath) {
  return { phase: 'start', callId: 'c:ptc:1', parentCallId: 'c', name, time: ++clock, args: args({ file_path: filePath, ...fields }), subCalls: [] }
}

/** The same call once settled (`tool/ptc-dispatch`). */
function settled(name, fields, filePath) {
  return {
    kind: 'tool-result', seq: ++clock, time: clock, callId: 'c:ptc:1', parentCallId: 'c',
    name, args: args({ file_path: filePath, ...fields }), call: { name, argsRaw: '{}' }, callTime: clock - 1,
    content: [], isError: false, subCalls: [],
  }
}

/** The `run_code` root whose row the transcript shows as "代码". */
function program(child, rootKind) {
  return rootKind === 'result'
    ? { kind: 'tool-result', seq: ++clock, time: clock, callId: 'c', name: 'run_code', args: args({ title: 'Edit' }), call: { name: 'run_code', argsRaw: '{}' }, callTime: clock - 1, content: [], isError: false, subCalls: [child] }
    : { phase: 'start', callId: 'c', name: 'run_code', time: ++clock, args: args({ title: 'Edit' }), subCalls: [child] }
}

// TabBody only injects t/readFile and returns the element; take CodeLiveTab out
// of it so the hook runtime renders the component that owns the hooks.
const buildProps = snapshot => {
  const element = tabBody({ useChat: selector => selector(snapshot), sessionId: 'session-x' })
  runtime.setHook(element.type)
  return element.props
}

const classes = new Set()
const texts = []
function walk(node) {
  if (node === null || node === undefined || typeof node !== 'object') return
  if (Array.isArray(node)) { node.forEach(walk); return }
  if (typeof node.type === 'function') { walk(node.type(node.props || {})); return }
  if (typeof node.props.className === 'string') node.props.className.split(' ').forEach(name => classes.add(name))
  for (const child of node.children || []) {
    if (typeof child === 'string') texts.push(child)
    else walk(child)
  }
}

/** Let the fake reads settle, then walk the final render. */
async function flush() {
  for (let i = 0; i < 8; i++) { await Promise.resolve(); runtime.advance(10) }
  classes.clear()
  texts.length = 0
  walk(runtime.advance(0))
}

;(async () => {
  // A finished program first seen after settlement: no live render, just the result.
  runtime.render(buildProps({ legacy: { runningCalls: [], nodes: [program(settled('edit', { old_string: 'const a = 1', new_string: 'const a = 2' }, 'src/a.js'), 'result')] } }))
  await flush()
  assert.ok(!classes.has('dcl-empty'), 'a settled PTC edit is not the empty state')
  assert.ok(classes.has('dcl-tab-name'), 'the PTC file gets a tab')
  assert.ok(classes.has('is-changed'), 'the rebuilt original marks the edited line')
  assert.ok(texts.includes('const'), 'the new line is rendered')

  // A program still running: the nested write shows immediately.
  runtime.render(buildProps({ legacy: { runningCalls: [program(running('write', { content: 'one\ntwo' }, 'src/new.js'))], nodes: [] } }))
  await flush()
  assert.ok(!classes.has('dcl-empty'), 'a running PTC write is not the empty state')
  assert.ok(classes.has('dcl-code'), 'the written line is rendered')

  // The read raced the edit and returned the mutated file. `foo` still occurs in
  // `foo bar`, so the region is found at the wrong place; the settled diff must
  // still be rebuilt from the call's own strings.
  runtime.render(buildProps({ legacy: { runningCalls: [program(running('edit', { old_string: 'foo', new_string: 'foo bar' }, 'src/race.js'))], nodes: [] } }))
  await flush()
  runtime.render(buildProps({ legacy: { runningCalls: [], nodes: [program(settled('edit', { old_string: 'foo', new_string: 'foo bar' }, 'src/race.js'), 'result')] } }))
  await flush()
  assert.ok(classes.has('is-changed'), 'a raced edit keeps its settled diff')

  console.log('ptc-render-probe ok')
})().catch(error => {
  console.error(error)
  process.exit(1)
})
