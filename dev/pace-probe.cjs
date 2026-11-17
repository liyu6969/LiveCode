// Offline probe for the playback pacing: no browser, no React effects, just the
// pure beat planner the panel drives itself with. Run with `node dev/pace-probe.cjs`.
const fs = require('fs')
const path = require('node:path')
const assert = require('node:assert/strict')

const src = fs.readFileSync(path.join(__dirname, '..', 'client.js'), 'utf8')

let mod = null
global.window = { __ModuleLoader__: { load: m => { mod = m } } }
global.document = { addEventListener() {}, removeEventListener() {}, querySelector: () => null, activeElement: null, body: {} }
global.localStorage = { getItem: () => null, setItem() {} }

const fakeReact = {
  createElement: () => null,
  useState: init => [typeof init === 'function' ? init() : init, () => {}],
  useRef: value => ({ current: value }),
  useMemo: fn => fn(),
  useEffect: () => {},
}
const fakeRequire = name => {
  if (name === 'react') return fakeReact
  throw new Error('unexpected require ' + name)
}

new Function('window', 'require', src)(global.window, fakeRequire)
const plugin = mod.factory(fakeRequire)
const { nextBeat, planBlockRemoval, revealStep, strikeStep, strikeBatch } = plugin.probe

/** Walk the beat machine to the end (or to the point it waits for the stream). */
function walk(input) {
  let state = { callId: 'probe', step: 'enter', revealed: 0, struck: 0 }
  const trace = []
  let total = 0
  const beats = { reveal: 0, strike: 0 }
  for (let guard = 0; guard < 5000; guard++) {
    const next = nextBeat(state, input)
    if (next === null) return { state, trace, total, beats, waiting: true }
    total += next.wait
    if (next.state.revealed > state.revealed) beats.reveal += 1
    if (next.state.struck > state.struck) beats.strike += 1
    state = next.state
    trace.push(state.step)
    if (state.step === 'done') return { state, trace, total, beats, waiting: false }
  }
  throw new Error('the beat machine did not finish')
}

const base = { pace: 1, settled: true }

// --- pairing ---------------------------------------------------------------
assert.deepEqual(planBlockRemoval(['a', 'b'], ['a', 'x', 'b']).struck, [], 'a pure insert removes nothing')
assert.deepEqual(planBlockRemoval(['a', 'b', 'c'], ['a', 'B', 'c']).struck, [1], 'one changed line is one removal')
assert.deepEqual(planBlockRemoval(['a', 'b', 'c'], ['a']).struck, [1, 2], 'the tail of a shortened block is removed')
assert.deepEqual(planBlockRemoval([], ['a']).struck, [], 'a new file removes nothing')
assert.deepEqual(planBlockRemoval(['a', 'b'], []).struck, [0, 1], 'clearing the block removes every line')

// --- a two-line change takes long enough to read --------------------------
const change = walk({ ...base, newCount: 2, oldCount: 2, struckTotal: 2 })
assert.equal(change.waiting, false)
assert.equal(change.beats.strike, 2, 'two lines are struck one at a time')
assert.ok(change.total >= 1200 && change.total <= 1600, 'two-line change plays ~1.4s, got ' + change.total)

// --- a three-line deletion gets its own beats -----------------------------
const drop = walk({ ...base, newCount: 0, oldCount: 3, struckTotal: 3 })
assert.equal(drop.state.step, 'done')
assert.equal(drop.beats.strike, 3)
assert.ok(drop.total >= 1100 && drop.total <= 1400, 'three-line delete plays ~1.3s, got ' + drop.total)

// --- a big write still finishes quickly -----------------------------------
const write = walk({ ...base, newCount: 400, oldCount: 400, struckTotal: 0 })
assert.ok(write.total <= 2800, 'a 400-line write stays under the cap, got ' + write.total)

// --- mass deletions batch their beats instead of running for minutes ------
const mass = walk({ ...base, newCount: 0, oldCount: 240, struckTotal: 240 })
assert.ok(mass.beats.strike <= 12, 'mass deletion uses at most 12 beats')
assert.equal(strikeBatch(240), 20)
assert.ok(mass.total <= 2800, 'mass deletion stays under the cap, got ' + mass.total)

// --- while the stream is still running the machine waits for lines --------
const live = walk({ ...base, settled: false, newCount: 5, oldCount: 5, struckTotal: 0 })
assert.equal(live.waiting, true, 'a live call waits instead of settling')
assert.equal(live.state.revealed, 5)
const liveDone = walk({ ...base, settled: true, newCount: 5, oldCount: 5, struckTotal: 0 })
assert.equal(liveDone.state.step, 'done')

// --- the pace multiplier scales everything --------------------------------
const slow = walk({ ...base, pace: 1.8, newCount: 2, oldCount: 2, struckTotal: 2 })
assert.ok(slow.total > change.total, 'slow mode is slower')
assert.equal(revealStep(0), 0)
assert.equal(strikeStep(0), 0)

console.log('pace-probe ok')
console.log('  two-line change: ' + change.total + 'ms')
console.log('  three-line delete: ' + drop.total + 'ms')
console.log('  400-line write: ' + write.total + 'ms')
console.log('  240-line delete: ' + mass.total + 'ms (' + mass.beats.strike + ' beats)')
