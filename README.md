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

- **Watch the code being typed.** The change happens on the file's real text,
  line by line — not in a diff you read afterwards.
- **The AI, personified.** The invisible agent becomes a character at the bottom
  of the panel: typing, wearing out, taking a coffee.
- **Your character, your drink.** Switch between 大肥鱼 and 小绿, coffee and tea,
  and show or hide the scene, from the gear.

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
