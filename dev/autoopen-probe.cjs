// Covers the panel's auto-open watcher, which the render probe never runs because
// its fake React skips effects. Closing the right column only collapses it, and
// the LiveCode tab stays "active", so the watcher used to decide the panel was
// already showing and never opened it again for the rest of the conversation.
// Run with `node dev/autoopen-probe.cjs`.
const fs = require('fs')
const path = require('node:path')
const assert = require('node:assert/strict')

const src = fs.readFileSync(path.join(__dirname, '..', 'client.js'), 'utf8')

// Enough of a Hooks runtime to run one headless component: refs survive renders,
// effects run when their deps change, and state is never set here.
function createRuntime() {
  const hooks = []
  let cursor = 0
  let hookFn = null

  const React = {
    createElement: () => null,
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
    useEffect(fn, deps) {
      const slot = cursor++
      if (hooks[slot] === undefined) hooks[slot] = { kind: 'effect', fn, deps, previous: null, ran: false }
      else { hooks[slot].fn = fn; hooks[slot].deps = deps }
    },
    useMemo(fn) { return fn() },
  }

  const sameDeps = (a, b) => a !== null && b !== null && a.length === b.length && a.every((v, i) => Object.is(v, b[i]))

  function render(props) {
    cursor = 0
    const out = hookFn(props)
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

const runtime = createRuntime()
let mod = null
global.window = { __ModuleLoader__: { load: m => { mod = m } } }
global.document = { hidden: false, addEventListener() {}, removeEventListener() {}, querySelector: () => null, activeElement: null, body: {} }
global.localStorage = { getItem: () => null, setItem() {} }

new Function('window', 'require', src)(global.window, name => {
  if (name === 'react') return runtime.React
  throw new Error('unexpected require ' + name)
})

const sidebar = {
  expanded: true,
  activeKind: undefined,
  opens: 0,
  failNext: false,
  active() { return this.activeKind === undefined ? undefined : { kind: this.activeKind } },
  isExpanded() { return this.expanded },
  openTab() {
    if (this.failNext) { this.failNext = false; throw new Error('no session surface is mounted') }
    this.opens++
  },
}

let DockBody = null
const ctx = {
  effect: fn => { fn(); return () => {} },
  locale: { register: () => {}, bind: () => key => key },
  slots: {
    inject: (name, cb) => { if (name === 'conversation.composer.dock') cb(); return () => {} },
    register: (options, component) => { if (options.id === 'dsh-code-live.auto') DockBody = component; return () => {} },
  },
  sidebarRightTabs: { register: () => () => {} },
  sidebarRight: sidebar,
  remote: { workspaceFiles: { read: async () => ({ ok: true, value: { text: '', lines: 0, eof: true } }) } },
}
const plugin = mod.factory(name => {
  if (name === 'react') return runtime.React
  throw new Error('unexpected require ' + name)
})
plugin.apply(ctx)
if (DockBody === null) throw new Error('auto-open watcher not registered')

runtime.setHook(DockBody)

let seq = 0
/** Render the watcher once with one running file mutation. */
function write(kind, expanded) {
  sidebar.activeKind = kind
  sidebar.expanded = expanded
  const call = {
    callId: 'call-' + String(++seq),
    name: 'write',
    phase: 'preparing',
    time: seq,
    args: { text: key => (key === 'file_path' ? 'src/app.js' : 'x'), complete: () => false },
    subCalls: [],
  }
  runtime.render({ useChat: selector => selector({ legacy: { runningCalls: [call], nodes: [] } }) })
  return call
}

const { shouldReveal } = plugin.probe
assert.equal(shouldReveal('code-live', true), false, 'the tab in front of an expanded column is already showing')
assert.equal(shouldReveal('code-live', false), true, 'a collapsed column hides the tab, so it must reopen')
assert.equal(shouldReveal('guide', true), true, 'another tab in front must give way to the code')
assert.equal(shouldReveal(undefined, true), true, 'a closed tab must come back')

// Already showing: a new call leaves the panel alone.
write('code-live', true)
assert.equal(sidebar.opens, 0, 'no open while the panel is already showing')

// The reported bug: the user closed the panel, so the column is collapsed while
// this tab is still the active one. The next write must bring it back.
write('code-live', false)
assert.equal(sidebar.opens, 1, 'a write after closing the panel reopens it')

// Another tab in front: the code takes the stage again.
write('guide', true)
assert.equal(sidebar.opens, 2, 'a write brings the panel forward from another tab')

// The tab itself was closed: reopening creates it.
write(undefined, true)
assert.equal(sidebar.opens, 3, 'a write re-creates a closed tab')

// The same call seen again never opens twice.
const call = write('code-live', false)
assert.equal(sidebar.opens, 4, 'a new call opens once')
runtime.render({ useChat: selector => selector({ legacy: { runningCalls: [call], nodes: [] } }) })
assert.equal(sidebar.opens, 4, 'a re-render of the same call does not open again')

// A refused open (the Session surface has not mounted yet) is not swallowed: the
// next commit retries the same call instead of losing it for the conversation.
const before = sidebar.opens
const quiet = console.error
console.error = () => {}
sidebar.failNext = true
const retried = write('code-live', false)
assert.equal(sidebar.opens, before, 'the refused open left the panel closed')
runtime.render({ useChat: selector => selector({ legacy: { runningCalls: [retried], nodes: [] } }) })
console.error = quiet
assert.equal(sidebar.opens, before + 1, 'the retry opens the panel')

console.log('autoopen-probe ok')
