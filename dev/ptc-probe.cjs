// Covers PTC ("code mode") tool calls. When the agent preset runs the model's
// tools through `run_code`, the write/edit calls are not roots: they arrive as
// `subCalls` of the program (and of its result node). The panel used to scan
// only roots, so a program that wrote a file left it empty — the reported bug.
// Run with `node dev/ptc-probe.cjs`.
const fs = require('fs')
const path = require('node:path')
const assert = require('node:assert/strict')

const src = fs.readFileSync(path.join(__dirname, '..', 'client.js'), 'utf8')

let mod = null
global.window = { __ModuleLoader__: { load: m => { mod = m } } }
global.document = { hidden: false, addEventListener() {}, removeEventListener() {}, querySelector: () => null, activeElement: null, body: {} }
global.localStorage = { getItem: () => null, setItem() {} }

// One fake React that can either run effects or skip them: the panel's view can
// be rendered without a remote read, the auto-open watcher needs its effect.
function createReact(runEffects) {
  const hooks = []
  let cursor = 0
  let hookFn = null

  const sameDeps = (a, b) => a !== null && b !== null && a.length === b.length && a.every((v, i) => Object.is(v, b[i]))

  const React = {
    createElement: (type, props, ...children) => ({ type, props: props || {}, children }),
    useState(init) {
      const slot = cursor++
      if (hooks[slot] === undefined) hooks[slot] = { kind: 'state', value: typeof init === 'function' ? init() : init }
      return [hooks[slot].value, () => {}]
    },
    useRef(value) {
      const slot = cursor++
      if (hooks[slot] === undefined) hooks[slot] = { kind: 'ref', current: value }
      return hooks[slot]
    },
    useMemo(fn) {
      cursor++
      return fn()
    },
    useEffect(fn, deps) {
      if (!runEffects) return
      const slot = cursor++
      if (hooks[slot] === undefined) hooks[slot] = { kind: 'effect', fn, deps, previous: null, ran: false }
      else { hooks[slot].fn = fn; hooks[slot].deps = deps }
    },
  }

  function render(props) {
    cursor = 0
    const out = hookFn(props)
    if (!runEffects) return out
    for (const hook of hooks) {
      if (hook === undefined || hook.kind !== 'effect') continue
      if (hook.ran && sameDeps(hook.deps, hook.previous)) continue
      hook.previous = hook.deps
      hook.ran = true
      hook.fn()
    }
    return out
  }

  return { React, render, setHook: fn => { hookFn = fn } }
}

const sidebar = {
  expanded: true,
  activeKind: undefined,
  opens: 0,
  active() { return this.activeKind === undefined ? undefined : { kind: this.activeKind } },
  isExpanded() { return this.expanded },
  openTab() { this.opens++ },
}

function createCtx() {
  let tabBody = null
  let dockBody = null
  const ctx = {
    effect: fn => { fn(); return () => {} },
    locale: { register: () => {}, bind: () => key => key },
    slots: {
      inject: (name, cb) => { cb(); return () => {} },
      register: (options, component) => {
        if (options.key === '@local/dsh-code-live') tabBody = component
        if (options.id === 'dsh-code-live.auto') dockBody = component
        return () => {}
      },
    },
    sidebarRightTabs: { register: () => () => {} },
    sidebarRight: sidebar,
    remote: { workspaceFiles: { read: async () => ({ ok: true, value: { text: '', lines: 0, eof: true } }) } },
  }
  return { ctx, getTab: () => tabBody, getDock: () => dockBody }
}

/** A sealed argument view, the shape PTC subcalls carry. */
function args(fields) {
  return {
    text: key => (typeof fields[key] === 'string' ? fields[key] : undefined),
    complete: () => true,
    has: key => Object.hasOwn(fields, key),
    value: key => fields[key],
    closed: () => true,
  }
}

const writeArgs = args({ file_path: 'mac-wechat-export/wxexport/ops.py', content: 'import os\nprint(1)\n' })
const bashArgs = args({ command: 'python -m py_compile ops.py' })

let clock = 1000
/** A running nested call, the shape `tool/ptc-dispatch-start` produces. */
function runningChild(callId, name, value) {
  return { phase: 'start', callId, parentCallId: 'c-root', name, time: ++clock, args: value, subCalls: [] }
}

/** A settled nested call, the shape `tool/ptc-dispatch` produces. */
function settledChild(block) {
  return {
    kind: 'tool-result', seq: ++clock, time: clock, callId: block.callId, parentCallId: block.parentCallId,
    name: block.name, args: block.args, call: { name: block.name, argsRaw: '{}' }, callTime: block.time,
    content: [], isError: false, subCalls: [],
  }
}

/** The `run_code` root the transcript renders as one "代码" row. */
function program(children, callId = 'c-root') {
  return { phase: 'start', callId, name: 'run_code', time: ++clock, args: args({ title: 'Write ops.py module' }), subCalls: children }
}

// --- data layer -------------------------------------------------------------

// Bootstrap once to reach the exported pure helpers.
const bootReact = createReact(false)
new Function('window', 'require', src)(global.window, name => {
  if (name === 'react') return bootReact.React
  throw new Error('unexpected require ' + name)
})
let plugin = mod.factory(name => {
  if (name === 'react') return bootReact.React
  throw new Error('unexpected require ' + name)
})
bootReact.setHook(() => null)
plugin.apply(createCtx().ctx)
const probe = plugin.probe

const write = runningChild('c-root:ptc:1', 'write', writeArgs)
const bash = runningChild('c-root:ptc:2', 'bash', bashArgs)
const runningRoot = program([write, bash])

let files = probe.collectFiles([runningRoot], [])
assert.equal(files.length, 1, 'a write nested in a running run_code program is collected')
assert.equal(files[0].path, 'mac-wechat-export/wxexport/ops.py')
assert.equal(files[0].settled, false, 'the nested write is still running')
assert.equal(files[0].call.callId, 'c-root:ptc:1')

// Nested run_code programs keep nesting; the write is two levels down.
const inner = program([runningChild('c-inner:ptc:1', 'edit', args({ file_path: 'src/app.js', old_string: 'a', new_string: 'b' }))], 'c-inner')
const outer = program([inner], 'c-outer')
files = probe.collectFiles([outer], [])
assert.equal(files.length, 1, 'a doubly nested file call is collected')
assert.equal(files[0].path, 'src/app.js')

// Once the program settles, its result node owns the same children.
const settledRoot = {
  kind: 'tool-result', seq: ++clock, time: clock, callId: 'c-root', name: 'run_code',
  args: runningRoot.args, call: { name: 'run_code', argsRaw: '{}' }, callTime: runningRoot.time,
  content: [], isError: false, subCalls: [settledChild(write), settledChild(bash)],
}
files = probe.collectFiles([], [settledRoot])
assert.equal(files.length, 1, 'a write nested in the settled run_code result is collected')
assert.equal(files[0].settled, true, 'the nested result counts as settled')
assert.equal(files[0].call.name, 'write')

// A settled child inside a still-running program is already applied.
const halfSettled = program([settledChild(write)])
files = probe.collectFiles([halfSettled], [])
assert.equal(files.length, 1, 'a settled child of a running program is collected')
assert.equal(files[0].settled, true, 'the child result settles the entry even while the program runs')

// Non-file tools in the program stay out, and a second write to the same path
// replaces the first entry in place.
const first = runningChild('c-root:ptc:8', 'write', args({ file_path: 'a.txt', content: 'one' }))
const second = runningChild('c-root:ptc:9', 'write', args({ file_path: 'a.txt', content: 'two' }))
files = probe.collectFiles([program([first, runningChild('c-root:ptc:10', 'bash', bashArgs), second])], [])
assert.equal(files.length, 1, 'one tab per path')
assert.equal(files[0].call.args.text('content'), 'two', 'the newest nested write wins')

// Rebuilding the original from an edit's own strings.
assert.deepEqual(probe.beforeEdit(['a', 'new', 'b'], 'new', 'old'), ['a', 'old', 'b'])
assert.equal(probe.beforeEdit(['a', 'b'], 'missing', 'old'), null, 'an edit that is not in the file cannot be undone')
assert.equal(probe.beforeEdit(['a'], '', 'old'), null, 'a write-shaped call has no old block')
assert.deepEqual(probe.beforeEdit(['a', 'inserted', 'b'], 'inserted', ''), ['a', '', 'b'], 'a pure insertion leaves the slot it filled')

// A PTC call may land before the original read returns. The read is then the
// mutated text, and the call's own arguments have to recover what it replaced.
assert.equal(
  probe.recoverOriginal('write', ['a', 'b'], 'a\nb', ''),
  null,
  'a write whose text already equals the read has no readable original',
)
assert.deepEqual(
  probe.recoverOriginal('write', ['old'], 'new', ''),
  ['old'],
  'a read that predates the write is the original',
)
assert.deepEqual(
  probe.recoverOriginal('edit', ['x', 'new', 'y'], 'new', 'old'),
  ['x', 'old', 'y'],
  'a read that already contains new_string is rewound to old_string',
)
assert.deepEqual(
  probe.recoverOriginal('edit', ['x', 'old', 'y'], 'new', 'old'),
  ['x', 'old', 'y'],
  'a read that still contains old_string is the original',
)
assert.equal(
  probe.recoverOriginal('edit', ['x'], 'new', 'old'),
  null,
  'an edit that cannot be rewound has no original',
)

// --- view -------------------------------------------------------------------

// A separate plugin instance so the tab renders against a React that skips
// effects: this checks the empty state disappears, not the remote reads.
const viewReact = createReact(false)
mod = null
global.window = { __ModuleLoader__: { load: m => { mod = m } } }
new Function('window', 'require', src)(global.window, name => {
  if (name === 'react') return viewReact.React
  throw new Error('unexpected require ' + name)
})
plugin = mod.factory(name => {
  if (name === 'react') return viewReact.React
  throw new Error('unexpected require ' + name)
})
const viewApps = createCtx()
plugin.apply(viewApps.ctx)
assert.ok(viewApps.getTab() !== null, 'tab body not registered')
viewReact.setHook(viewApps.getTab())

const viewSnapshot = { legacy: { runningCalls: [program([runningChild('c-view:ptc:1', 'write', writeArgs)])], nodes: [] } }
const tree = viewReact.render({
  useChat: selector => selector(viewSnapshot),
  sessionId: 'session-x',
})

const classes = []
const texts = []
const walkElement = node => {
  if (node === null || node === undefined || typeof node !== 'object') return
  if (Array.isArray(node)) { node.forEach(walkElement); return }
  if (typeof node.type === 'function') { walkElement(node.type(node.props || {})); return }
  if (typeof node.props.className === 'string') classes.push(node.props.className)
  for (const child of node.children || []) {
    if (typeof child === 'string') texts.push(child)
    else walkElement(child)
  }
}
walkElement(tree)
assert.ok(!classes.some(name => name.includes('dcl-empty')), 'a PTC write does not render the empty panel')
assert.ok(classes.some(name => name.includes('dcl-tab-name')), 'the file gets a tab')
assert.ok(texts.includes('ops.py'), 'the tab names the file the program wrote')

// --- auto-open --------------------------------------------------------------

const autoReact = createReact(true)
mod = null
global.window = { __ModuleLoader__: { load: m => { mod = m } } }
new Function('window', 'require', src)(global.window, name => {
  if (name === 'react') return autoReact.React
  throw new Error('unexpected require ' + name)
})
plugin = mod.factory(name => {
  if (name === 'react') return autoReact.React
  throw new Error('unexpected require ' + name)
})
const apps = createCtx()
plugin.apply(apps.ctx)
assert.ok(apps.getDock() !== null, 'auto-open watcher not registered')
autoReact.setHook(apps.getDock())

function renderRunning(calls) {
  autoReact.render({ useChat: selector => selector({ legacy: { runningCalls: calls, nodes: [] } }) })
}

sidebar.activeKind = 'guide'
renderRunning([program([runningChild('c-open:ptc:1', 'write', args({ file_path: 'x.js', content: 'x' }))])])
assert.equal(sidebar.opens, 1, 'a write inside run_code brings the panel forward')

renderRunning([program([runningChild('c-open:ptc:1', 'write', args({ file_path: 'x.js', content: 'x' }))])])
assert.equal(sidebar.opens, 1, 'the same nested call never opens twice')

renderRunning([program([program([runningChild('c-open:ptc:2', 'edit', args({ file_path: 'y.js', old_string: 'a', new_string: 'b' }))], 'c-open-inner')], 'c-open-outer')])
assert.equal(sidebar.opens, 2, 'a doubly nested edit opens the panel too')

renderRunning([program([runningChild('c-open:ptc:3', 'bash', bashArgs)])])
assert.equal(sidebar.opens, 2, 'a program that only runs commands leaves the panel alone')

console.log('ptc-probe ok')
