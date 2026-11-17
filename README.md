# LiveCode · 实时代码

English | [中文](README.zh.md)

Watch the code appear while it is written. The right Sidebar lays the **original
file** out first, boxes the region a `write`/`edit` call is about to replace,
folds the old lines away and grows the new ones in place — then hands over the
**complete, scrollable file** with a gutter bar beside every line the call
changed.

A character scene from an anime-coding study sits at the
bottom of the panel and reacts to what the agent is doing: she types while code
streams, her screen scrolls only then, she takes a coffee (or tea) break after
five idle minutes and naps after ten.

Built as a **DeepSeek Harness (DSH)** bundle for the Web GUI. Tested against
`dsh 0.2.2-rc.3` (desktop profile).

---

## Features

- **Live, in place.** The panel shows the file's original text and one overlay
  box on the region being replaced; old lines collapse, new lines stream in one
  at a time. A change that removes lines turns the box red (fast deletes get a
  short hold so the removal is visible).
- **The real file after it settles.** Once the tool reports back, the panel
  reads the file again and renders all of it, with a change bar in the left
  gutter, a jump to the first changed line when you switch tabs, and no
  placeholder rows for deleted lines.
- **One tab per file.** Every file the session touched gets a chip (status dot,
  `×` to close, right-click for *close others* / *close all*). The panel follows
  the file being written and scrolls the strip to keep that chip in view.
- **Syntax colour that follows the theme.** Nine token categories (keywords,
  functions, types, constants, globals, properties, strings, numbers, comments)
  mixed from the host's theme tokens, with code set at 12.5/21px and tabular line
  numbers.
- **A scene that reacts.** Fast typing while writing, the demo's "berserk" state
  past 200 written lines (speed lines, screen glow, keyboard smoke), a drink
  after 5 idle minutes, a nap after 10 — all driven by the original demo rig.

## Install

LiveCode is a DSH bundle; it has no build step and no runtime dependencies.

**From the GUI** — Settings → Plugins → **Add plugin**, and enter the absolute
path of this directory. Then enable the bundle and open any session.

**From an agent session** — install the directory with the plugin manager:

```text
plugin_manager action=install_bundle target=/absolute/path/to/dsh-code-live
```

After installing, the plugin appears as **实时代码** (Chinese) / **LiveCode**
(English) in the Sidebar's `+` guide, and opens itself on the next file write.

## Use

Nothing to configure to get started. Ask the agent to change a file; the panel
opens, shows the original text with the replacement playing out, then the settled
file.

- Click a chip to read a file the session changed earlier.
- `×` closes a chip; right-click any chip to close the others or all of them.
- The gear at the top right opens the scene settings: show/hide the scene, pick
  the character (大肥鱼 / 小绿), pick the drink (coffee / tea).

## Settings

The gear popover stores your choices in `localStorage`. A profile can also set
the defaults in `cordis.patch.yml`:

```yaml
- id: dsh-code-live
  name: '@local/dsh-code-live'
  config:
    scene: true       # show the character scene
    sceneHeight: 168  # 120–280, pixels
    character: maid   # maid = 大肥鱼, mint = 小绿
    drink: coffee     # coffee | tea
```

These are read once when the page loads, so a changed default takes effect after
a refresh. A value chosen in the gear popover wins over the file.

## Limits

- **`write` and `edit` only.** `apply_patch` streams patch text and is not
  followed; shell edits (`sed`, formatters, generators) never appear.
- **What streams is a preview.** The file does not change until the tool runs, so
  an approval pause or a denied call leaves it untouched — which is what the
  *Dispatching* / *Not applied* states are for.
- **One read is the baseline.** The pre-edit text is read once per call; a file
  the panel never saw being edited has no baseline to diff against.
- **Big files are windowed.** At most 1500 lines render; a diff whose middle
  exceeds ~500×500 lines degrades to "whole region replaced".
- **The napping sway is tiny here.** The demo's rest motion is 1.5 canvas units,
  about 0.4 px at this panel's size. It is implemented exactly as the demo has
  it, and effectively invisible; raise `sceneHeight` to see it better.

## Development

`client.js` is the whole UI (vanilla React, no imports beyond `react`); the
character scene is embedded from the demo as `{ html, css, rig }` strings.

```bash
node dev/render-probe.cjs          # render the panel headlessly: empty / settled / streaming
OPEN=1 node dev/render-probe.cjs   # also render popovers and held frames
```

Run that (and `node --check client.js index.js`) after any change, then reload
the plugin by toggling `include:dsh-code-live` off and on. `HANDOFF.md` records
the architecture, the decisions behind it, and the traps already paid for.

## Files

| Path | What |
|---|---|
| `client.js` | the panel, the tab type, the scene, the settings popover |
| `index.js` | host half: Config schema and the page global it injects |
| `cordis.patch.yml` | the bundle's loader row |
| `locale/*.json` | plugin page title and description |
| `dev/render-probe.cjs` | headless render check |
| `README.md` / `README.zh.md` | this document |
| `HANDOFF.md` | maintenance notes |
