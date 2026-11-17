# LiveCode · 实时代码

English | [中文](README.zh.md)

**Watch the code being written.**

Most of the time an agent finishes, hands you a diff, and you read it after the
fact. LiveCode plays that moment instead — for the feeling of watching it happen,
the thing a finished diff never gives you.

It does not make the agent faster. It makes the process something you can watch,
and that is the point: a small, steady dose of "something is being built right
now" while you wait.

A character sits at the bottom of the panel: the invisible agent given a body,
doing the emotional labour for you.

## Features

- **Live, in place.** See the change happen on the file's real text, not in a
  diff window somewhere else.
- **Then the real thing.** When the call settles you get the whole file, with a
  quiet change bar beside every line that moved.
- **One tab per file.** Every file the session touched gets its own tab, and the
  panel follows whoever is being written.
- **Colour that belongs here.** Syntax tinting that follows the host theme —
  nothing glares, nothing clashes.
- **Company.** The character types while code streams, burns out past 200 lines,
  takes a coffee (or tea) after 5 idle minutes and naps after 10.

## Install

LiveCode is a DeepSeek Harness (DSH) bundle: no build step, no dependencies.

1. Settings → Plugins → **Add plugin**
2. Enter the absolute path of this directory
3. Enable **实时代码 / LiveCode**, then ask the agent to change a file

Or from an agent session: `plugin_manager install_bundle target=/absolute/path`.

## Use

The panel opens itself on the next `write` / `edit`. Click a tab to revisit a
file, `×` to close one, right-click for *close others* / *close all*. The gear in
the corner switches the character, the drink, and whether the scene shows at all.

## Settings

The gear popover remembers your choices. A profile can set defaults in
`cordis.patch.yml`:

```yaml
- id: dsh-code-live
  name: '@local/dsh-code-live'
  config:
    scene: true       # show the character
    sceneHeight: 168  # 120–280 px
    character: maid   # maid = 大肥鱼, mint = 小绿
    drink: coffee     # coffee | tea
```

## Development

```bash
node dev/render-probe.cjs          # headless render: empty / settled / streaming
OPEN=1 node dev/render-probe.cjs   # also render popovers and held frames
```

`HANDOFF.md` has the architecture and the decisions behind it.

## License

MIT © 2026 liyu — see [LICENSE](LICENSE).
