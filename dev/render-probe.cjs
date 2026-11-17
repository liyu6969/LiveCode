const fs = require('fs')
const src = fs.readFileSync(require('node:path').join(__dirname, '..', 'client.js'), 'utf8')

let mod = null
global.window = { __ModuleLoader__: { load: m => { mod = m } } }
global.document = { addEventListener() {}, removeEventListener() {}, querySelector: () => null, activeElement: null, body: {} }
global.localStorage = { getItem: () => null, setItem: () => {} }

const fakeReact = {
  createElement: (type, props, ...children) => ({ type, props, children }),
  useState: init => {
    const value = typeof init === 'function' ? init() : init
    // OPEN=1 flips every boolean on, so popovers and held frames render too.
    return [process.env.OPEN === '1' && typeof value === 'boolean' ? true : value, () => {}]
  },
  useRef: value => ({ current: value }),
  useMemo: fn => fn(),
  useEffect: () => {},
}
const fakeRequire = name => {
  if (name === 'react') return fakeReact
  throw new Error('unexpected require ' + name)
}

new Function('window', 'require', src)(global.window, fakeRequire)
if (!mod) throw new Error('module did not register')
const plugin = mod.factory(fakeRequire)

// The rig drives its scene by id, and one missing node throws inside its listener
// setup — before `frame` is ever scheduled — which freezes the character while the
// CSS-only effects keep working. That is how the code-scroll button shipped
// missing. Effects never run in this fake-React probe, so check the manifest here.
const scene = (() => {
  const start = src.indexOf('const SCENE = {')
  const end = src.indexOf('\n    /**\n     * Settings the Host half')
  if (start < 0 || end < 0) throw new Error('SCENE block not found')
  return new Function('return ' + src.slice(start + 'const SCENE = '.length, end))()
})()
// SceneFigure recreates stubs the extracted markup lost; keep this list in step.
const injectedStubs = ['code-scroll']
const declaredIds = new Set([...scene.html.matchAll(/id="([^"]+)"/g)].map(match => match[1]))
const neededIds = [...new Set([...scene.rig.matchAll(/querySelector(?:All)?\('#([^']+)'\)/g)].map(match => match[1]))]
const missingIds = neededIds.filter(id => !declaredIds.has(id) && !injectedStubs.includes(id))
if (missingIds.length > 0) {
  console.error('rig queries ids the scene markup lacks:', missingIds.join(', '))
  process.exitCode = 1
}

let TabBody = null
const ctx = {
  effect: fn => { const cleanup = fn(); return () => {} },
  locale: { register: () => {}, bind: () => key => key },
  slots: {
    inject: (name, cb) => { if (name === 'sidebar.right.pane.tab') { const r = cb(); } return () => {} },
    register: (options, component) => { if (options.key === '@local/dsh-code-live') TabBody = component; return () => {} },
  },
  sidebarRightTabs: { register: () => () => {} },
  sidebarRight: { active: () => undefined, isExpanded: () => false, openTab: () => {} },
  remote: { workspaceFiles: { read: async () => ({ ok: true, value: { text: '', lines: 0, eof: true } }) } },
}
plugin.apply(ctx)
if (!TabBody) throw new Error('tab body not registered')

const t = key => key
const readFile = async () => ({ ok: true, lines: ['one', 'two'], truncated: false })

function deepRender(element) {
  if (element === null || element === undefined || typeof element !== 'object') return
  if (Array.isArray(element)) { for (const child of element) deepRender(child); return }
  if (typeof element.type === 'function') {
    deepRender(element.type(element.props || {}))
    return
  }
  for (const child of element.children || []) deepRender(child)
}

function render(label, snapshot) {
  try {
    const props = { useChat: selector => selector(snapshot), t, readFile, sessionId: 'session-x' }
    deepRender(TabBody(props))
    console.log(label, '-> rendered ok')
  } catch (error) {
    console.log(label, '-> THREW:', error && error.message)
  }
}

render('empty', { legacy: { runningCalls: [], nodes: [] } })
render('settled-write', {
  legacy: {
    runningCalls: [],
    nodes: [{ kind: 'tool-result', callId: 'c1', name: 'write', time: Date.now(), isError: false, args: { text: k => (k === 'file_path' ? 'a/b.js' : 'line\nline'), complete: () => true }, subCalls: [] }],
  },
})
render('streaming-write', {
  legacy: {
    runningCalls: [{ callId: 'c2', name: 'write', phase: 'preparing', time: Date.now(), args: { text: k => (k === 'file_path' ? 'a/b.js' : 'x\ny\nz'), complete: () => false }, subCalls: [] }],
    nodes: [],
  },
})

