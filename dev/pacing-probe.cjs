// Drives the real `usePacing` hook through a tiny hook runtime with a fake clock,
// so the timer chain (not just the pure beats) is covered without a browser.
// Run with `node dev/pacing-probe.cjs`.
const fs = require('fs')
const path = require('node:path')
const assert = require('node:assert/strict')

const src = fs.readFileSync(path.join(__dirname, '..', 'client.js'), 'utf8')

// A minimal React Hooks runtime: state, refs, effects with deps, and timers that
// only move when the probe advances the clock.
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
    createElement: () => null,
    useState(init) {
      const slot = cursor++
      if (hooks[slot] === undefined) hooks[slot] = { kind: 'state', value: typeof init === 'function' ? init() : init }
      const hook = hooks[slot]
      const set = next => {
        const value = typeof next === 'function' ? next(hook.value) : next
        if (Object.is(value, hook.value)) return
        hook.value = value
        dirty = true
      }
      return [hook.value, set]
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
    for (let guard = 0; guard < 20; guard++) {
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

  global.setTimeout = (fn, delay) => {
    const id = seq++
    timers.set(id, { at: now + Math.max(0, delay || 0), fn })
    return id
  }
  global.clearTimeout = id => { timers.delete(id) }

  return { React, render, advance, now: () => now, setHook: fn => { hookFn = fn } }
}

const runtime = createRuntime()
global.window = { __ModuleLoader__: { load: () => {} } }
global.document = { hidden: false, addEventListener() {}, removeEventListener() {}, querySelector: () => null, activeElement: null, body: {} }
global.localStorage = { getItem: () => null, setItem() {} }

let mod = null
global.window.__ModuleLoader__.load = m => { mod = m }
new Function('window', 'require', src)(global.window, name => {
  if (name === 'react') return runtime.React
  throw new Error('unexpected require ' + name)
})
const { usePacing } = mod.factory(name => {
  if (name === 'react') return runtime.React
  throw new Error('unexpected require ' + name)
}).probe
runtime.setHook(usePacing)

function props(overrides) {
  return {
    callId: 'call-1', active: true, enabled: true, fresh: true, pace: 1,
    ready: true, newCount: 0, settled: false, oldCount: 0, struckTotal: 0,
    ...overrides,
  }
}

// A live call stalls at "enter + waiting" until the stream delivers lines.
let view = runtime.render(props())
assert.equal(view.step, 'enter')
view = runtime.advance(500)
assert.equal(view.step, 'reveal')
assert.equal(view.revealed, 0, 'nothing to reveal yet')

// Lines arrive, then the tool settles: the playhead replays them at its own pace.
view = runtime.render(props({ newCount: 3 }))
view = runtime.advance(1000)
assert.equal(view.revealed, 3, 'the three lines played, got ' + view.revealed)
view = runtime.render(props({ newCount: 3, settled: true, oldCount: 3, struckTotal: 2 }))
view = runtime.advance(2000)
assert.equal(view.step, 'done', 'playback finished')
assert.ok(runtime.now() < 4000, 'the whole play-through stays short, took ' + runtime.now())

// A different call resets the playhead.
view = runtime.render(props({ callId: 'call-2' }))
assert.equal(view.step, 'enter', 'a new call restarts from the entrance beat')

// Skipping jumps to the settled view at once.
view.skip()
view = runtime.advance(0)
assert.equal(view.step, 'done', 'skip fast-forwards')

// Pace off means the hook never holds the view back.
view = runtime.render(props({ callId: 'call-3', enabled: false }))
assert.equal(view.step, 'done')

console.log('pacing-probe ok')
