# 上下文压缩 / Handoff

> 产品名：中文 **实时代码**，英文 **LiveCode**（标签页、guide 条目、Plugins 页标题都用它；包名仍是 `@local/dsh-code-live`）。
> 这份文件是为了在上下文被裁剪后仍能继续开发。它记录"现在的设计是什么、为什么这样、改哪里"。

## 一句话

`@local/dsh-code-live` —— DSH 右侧边栏的一个标签页：Agent 改文件时，先铺开**原文件**，在改动处套一个**遮罩框**逐行演出替换；落定后展示**完整新文件** + 左侧变更竖线。

## 位置与安装

- 源码：`/Users/liyu/Desktop/DeepSeekNiu/dsh-code-live/`（[client.js](client.js) 是全部逻辑，约 1800 行，零外部依赖）
- 已安装进 `desktop` profile，插件行 `include:dsh-code-live`，bundle `@local/dsh-code-live`（`link:` 到工作区目录）
- 改完 `client.js` 后热更新：`plugin_manager set_plugin` 先 `enabled:false` 再 `enabled:true`，target 用 `include:dsh-code-live`
- 用的宿主 API：`ctx.sidebarRightTabs.register` + `ctx.slots.register`（`sidebar.right.pane.tab` 键位）、`ctx.sidebarRight.openTab/active`、`ctx.remote.workspaceFiles.read`、`ctx.locale`、`ctx.slots.register`（`conversation.composer.dock` 上挂无渲染 watcher）

## 数据从哪来

- **流式文本**：`useChat(s => s.legacy.runningCalls)` → 每个 call 的 `args`（`PartialArguments`），`text('content'|'new_string'|'old_string'|'file_path')`、`complete(key)`
- **已落定**：`useChat(s => s.legacy.nodes)` 里的 `kind === 'tool-result'` 节点（`isError` 决定已应用/未生效）
- **原文件**：调用进行中通过 `remote.workspaceFiles.read` 分页读，按 `callId|path` 缓存（`base`）；落定后再读一次当前文件（`after`，独立缓存）
- 只跟 `write` / `edit`；`apply_patch`、shell 改动不管
- **走整棵 call 树**：PTC 预设下模型只直接调 `run_code`，真正的 `write` / `edit` 是它的 `subCalls`（id 形如 `<parent>:ptc:<n>`，由 `tool/ptc-dispatch-start` / `tool/ptc-dispatch` 事件生成）。`collectFiles` 和自动打开 watcher 都用 `walkCalls` 递归，只看根 call 会让面板永远空着（用户报过：左边“代码 · Write ops.py module”下面已经在“写入”，右边还是“还没有文件改动”）。
- PTC 子调用的参数是**一次到齐**的密封 `PartialArguments`，没有逐字流式；所以子调用要么演“已看到全文”的回放，要么直接落定。它也可能在能读原文件之前就已经把文件改掉，`beforeEdit()` 用 `new_string`/`old_string` 从 `after` 反推 `before` 来补 diff。

## 关键状态（CodeLiveTab 内）

| 名字 | 作用 |
|---|---|
| `collectFiles` | 按路径聚合，每路径保留最新 call，按首次触碰排序 |
| `closed: Map<path, callId>` | 关闭的 chip；同一 call 保持关闭，文件再被改（新 callId）自动恢复 |
| `pickedPath` | 手动选中的 tab；下一次新 call 开始时清空，恢复"跟随最新" |
| `base` / `after` | 修改前 / 落定后文件内容，各自按 callId 缓存 |
| 每条 `files` 项 | `{ path, call, settled, time, firstTime }` |

## 视图结构

0. **底部场景**（`.dcl-scene`）：从 `~/Desktop/RBShare/anime-coding-demo/index.html` 搬来的 SVG + 骨骼脚本，`SCENE` 常量里是 `{ html, css, rig }` 三段生成好的字符串（id 加了 `dcl-` 前缀避免撞宿主，`frame` 里插了 `STOP()` 守卫）；流式时 `setCodingIntensity(0.95)`；写入内容超过 `SMOKE_LINES`（200 行）时拉满到 1.0 —— 等于 demo 的「开启暴走」：最快敲击 + 速度线 + 屏幕光晕 + 键盘烟雾粒子（落定后继续 2.4 秒）；否则 0.15。空闲满 `COFFEE_MS`（5 分钟）就调一次 demo 的 `window.drinkCoffee()`（它自带 5.8 秒时间线：伸手→抬杯→啜两口→放回→回键盘），写入开始会重新计时。探针办法：临时把 `COFFEE_MS` 改成 3–8 秒，重载插件即可反复看。烟雾用的就是 demo 自己的 canvas 粒子系统（heat、发射率、横向漂移、颜色全原样），没有另写一套；`.screen-glow` 只在 berserk 时显示（0.45），平时 0。
1. **头部**：`write`/`edit` 徽标 + 绝对路径 + 状态胶囊（生成中 / 待执行 / 已应用 / 未生效）
2. **tab 条**（`.dcl-tabbar` > `.dcl-tabs`）：每文件一个 chip，圆点表状态；活跃 chip 强调色；`×` 关闭单条；**右键**菜单（关闭其他 / 关闭全部）；活跃 chip 变化时横向滚动进视野
3. **代码区**：
   - 流式：完整原文件 + 一个遮罩框（`.dcl-overlay`），旧块先留着，新行按播放头逐行淡入；参数闭合后把被删的旧行逐行划掉（红框），再折叠旧块、驻留，最后切成整文件视图
   - 落定：`diffRows(before, after)` 出完整新文件，改动行左侧绿竖线（`.dcl-bar`），删除行**不显示**任何标记
4. **空态**：图标 + 标题 + 说明 + "等待 write/edit" 胶囊；全部关闭时换成"标签都已关闭 + 重新显示"

## 排版/配色约定（都在 client.js 的 CSS 与 `.dcl-root` 变量里）

- 行结构：竖线 2px → 2px → 行号 24px/10px → 11px → 代码 12.5px/21px，行内左内边距 0（贴边），`tab-size: 4`
- 语法色 9 类，全部 `color-mix` 自 `--dsw-alias-*`：关键词蓝（`--dsw-alias-link`）、函数紫、类型青、常量橙、内置全局金黄、属性灰蓝、字符串绿、数字琥珀、注释灰斜体
- `.dcl-root` 上定义 `--dcl-syn-*`，改色只动这一组

## 决策与理由（别轻易推翻）

- **不用宿主 `ui-primitives`**：插件不能 import 宿主组件，代码视图、tab、菜单都是自绘
- **`styles` 全局在安装型插件里不存在**：样式用组件内 `<style>`（`Style` 组件）渲染
- **`--dsw-alias-brand-primary` 是正文色不是强调色**：关键词用 `--dsw-alias-link`
- **删除判定按行数**：`newShown.length < count` 才算删除；只认"`new_string` 已闭合"（`settledArg`）之后，否则每个 edit 起手都会闪红
- **删除帧停留 1.4s**：删除没有新文字可演，落定瞬间就会切到文件视图，不停一会儿看不见
- **自动打开不抢键盘焦点**：`openTab` 后 120ms 若焦点被面板拿走则还给 `document.activeElement`
- **自动打开的判定要连"展开"一起看**：关闭右侧面板只是把列收起来（collapse），tab 还在 layout 里、`sidebarRight.active()` 仍返回它。只比 `active().kind` 就会认为"已经在显示"，关过一次之后这个会话里再写代码也不开。`shouldReveal(activeKind, expanded)` 要求 tab 在前 **且** 列展开；任一不满足就 `openTab`（它自己会展开列）。
- **行号列定宽 24px**：保证每行代码起点对齐；代价是 >9999 行会裁位

## 配置

`index.js` 导出 Schemastery `Config`：`scene: boolean`（默认 true）、`sceneHeight: number`（120–280，默认 168）、`character: 'maid' | 'mint'`（默认 maid = 大肥鱼）。Host 半把校验后的值通过 `ctx.on('webserver/index-inject')` 注入成页面全局 `__DSH_CODE_LIVE_CONFIG__`，client 在模块加载时读一次（所以改完设置要刷新页面）。

头部只有一个齿轮按钮（`.dcl-gear`，`GearIcon`）打开设置弹窗（`.dcl-settings` / `.dcl-settings-wrap`，`settingsRef` + outside-click/Esc），三行分段控件：显示场景（`EyeGlyph`，眼睛/划掉眼）/ 人物（文字：大肥鱼/小绿）/ 饮品（直接用 emoji ☕/🍵，带 title/aria-label；早先的自绘 `CupGlyph` 已删）；饮品在 `coffee`/`tea` 之间切换，存 `localStorage['dsh-code-live.drink']`，切的是 demo 的 `window.setDrink()`（`.tea` class，茶杯外观不同、喝的动作复用）。人物在 `maid`（大肥鱼）和 `mint`（小绿）之间切换，存 `localStorage['dsh-code-live.character']`；场景显隐是 `sceneOn`，存 `localStorage['dsh-code-live.scene']`，选择存 `localStorage['dsh-code-live.scene']`（`'1'`/`'0'`），优先于 Config 的默认值。DSH 的 Plugins 页只渲染插件自己通过 `plugins.row.config` 槽位画的表单，没有自动表单，所以这个开关先做在面板里。

注意：本包是 `link:` 安装、没有自己的 node_modules，直接 `import '@deepseek-ai/schemastery'` 会 ERR_MODULE_NOT_FOUND。`index.js` 里用 `createRequire` 从 `DSH_INSTALL_DIR` / `process.resourcesPath` 借宿主那份，解析不到就不导出 Config（只丢校验，不影响运行）。

## 场景里三处对 demo 源的小改动

都不改嵌入的 `SCENE` 资源，而是在运行前对 `SCENE.rig` 做字符串替换 / 加 class / 补节点：

1. **屏幕滚动只在写代码时**：`frame()` 里 `codeClock=(codeClock+dt*(90+intensity*180))%codePeriod;` 被包成 `if(!scene.classList.contains('screen-idle'))...`，`SceneFigure` 按 `active` 加/去 `screen-idle`。替换失败会 `console.warn('[dsh-code-live] screen-scroll patch did not apply')`。
2. **烟雾/速度线/光晕**：`smoking` class + `setCodingIntensity(1)`，见上面。
3. **补回 `#code-scroll` 桩节点**：抽 `SCENE.html` 时漏了这个按钮（rig 里叫 `#code-scroll`，不带 `dcl-` 前缀），rig 在 `codeScrollButton.addEventListener` 处抛 `TypeError: ... of null`。这一抛发生在 `frame` 定义/调度之前，于是整个 rig 后半截全没执行：人物不动、手臂不上屏、屏幕没代码、烟雾不出，只有纯 CSS 的暴走速度线和光晕照常。`SceneFigure` 现在在跑 rig 前按 id 补建缺失的桩节点（`for (const id of ['code-scroll'])`），以后再抽资源漏东西也会走这条路，而不是静默冻住。

休息态（10 分钟空闲）用的是 demo 新版的 `window.setResting(true)`：`resting` 变量 + `.resting` class（双手静止、Zzz 由 CSS 播放），喝东西时不能进休息、休息时不能喝，这两条 demo 规则原样保留。阈值 `REST_MS` 在 `client.js` 里。

**注意**：demo 的休息摇摆是 `body.y = lerp(...,1.5*breath,r)+2.2*r`，1.5 个画布单位；我们的场景高 168px（缩放 0.256），换算约 0.4px，肉眼不可见。用户明确要求"按原参数、看不清也接受"，所以**不要**擅自放大系数。要看清楚只有两条路：调大 `sceneHeight`，或者经确认后放大系数。

## 滚动跟随的两条规则

1. **流式期间跟随**：`SceneFigure` 之外的 `useEffect` 每来一段新文本，量 `[data-dcl-anchor]`（流式时是遮罩框，落定后是第一处改动行）相对 `.dcl-body` 的位置，超出可视区就把 `body.scrollTop` 往下推，底部留 32px 余量；如果 `.dcl-body` 本身不是滚动容器（`scrollTop` 没变），退回对最后一行 `scrollIntoView`。
2. **谁算"用户接管"**：只用 `onWheel` 判断——向上滚视为用户接管，向下滚恢复跟随。**不要**再用"距文档底部 < N px"来推断，遮罩框下面还有文件剩余行，一滚动就会误判成用户滚走，跟一屏就停（这个坑踩过）。
3. **落定不回跳**：`followedCallRef` 记住跟随过的那次调用，落定时不做"跳到第一处改动"，停在原位置；只有切换到别的标签才跳。

## 演出节奏（慢放）

流式窗口可能比一帧还短（几行的 edit 参数一两片就写完、工具毫秒级返回），旧实现直接把"过程"跳过去，只留下静态 diff。现在面板由**播放头**驱动，不再由快照驱动：

- `nextBeat(state, input)`：纯函数状态机 `enter → reveal → strike → collapse → hold → done`。`reveal` 里下一行还没到就返回 `null`（等流），到了才按节拍推进。
- 时长（`client.js` 顶部常量）：enter 180ms；reveal 总预算 1100ms（每行 clamp 3–110ms）；strike 总预算 800ms、最多 12 拍（`strikeBatch` 每拍划一批）；collapse 340ms；hold 380ms。最坏 ~2.8s。
- `usePacing`：`setTimeout` 自续链 + refs。流式快照再密也不会重置节拍（旧的 effect 写法会被快照打断）；`callId` 变即重置；`document.hidden`、点遮罩框（`skip`）、`pace=off` 都直接跳到落定。
- 旧块来源：优先 `baseline` 里的 `region`；定位不到（或调用一出现就已落定、`base` 是 `none`）时退回 `linesOf(old_string)` —— 这是"首次看到就 settled"也能演出的关键。
- 删除判定：`planBlockRemoval(oldBlock, newLines)` 行级 LCS，`struck` = 没配上的旧行。纯插入 → 空（不会像旧的行数比较那样误闪红）；参数没闭合前不算删除。
- 落定后仍在播：`showLive = !settled || play.step !== 'done'`，看完最后一拍才切到整文件视图；期间胶囊仍是"已应用"（视图在回放，不是状态在回退）。
- 赛后回放：首次看到就已落定、且 `call.time` 距今 < `REPLAY_MS`（8s）时，照样用 `old_string`/`new_string` 播一遍；更老的历史直接静态显示。
- `prefers-reduced-motion` 只关 CSS 动画；要连驻留一起去掉就把 pace 调成"关"。
- 设置第三行"演出节奏"（慢 ×1.8 / 标准 ×1 / 关 ×0），存 `localStorage['dsh-code-live.pace']`。

改节奏只动顶部那组常量。踩过的坑：`enter` 会等 `base` 读完最多 600ms（`state.waited`），否则框先出现在文件顶部、读到了再跳到正确位置。

## 改 client.js 后先跑自测

`node dev/render-probe.cjs`（加 `OPEN=1` 会把所有布尔态打开，连弹窗一起渲染） —— 无头渲染三种状态（空页 / 已落定 / 流式中），用假 React + 假 ctx 把 `CodeLiveTab` 真跑一遍。

另有五个探针：

- `node dev/autoopen-probe.cjs` —— 自动打开 watcher（render-probe 的假 React 不跑 effect，覆盖不到）：面板展开且本 tab 在前时不抢、收起后再写代码要重新打开、切到别的 tab 要抢回来、tab 被关掉要重建、同一个 call 只开一次。
- `node dev/ptc-probe.cjs` —— `run_code` 里嵌套的 write/edit：运行中的子调用、落定的结果节点、两层嵌套、同一路径取最新、`beforeEdit` 反推，以及空态消失 / tab 名字 / 自动打开（嵌套子调用也要拉起面板）。
- `node dev/ptc-render-probe.cjs` —— 带 effect 和假读盘的微型 hooks runtime 真渲染 `CodeLiveTab`：落定的嵌套 edit 有改动竖线、运行中的嵌套 write 不是空态、原文件读取抢在写入之后（`foo` 仍在 `foo bar` 里）时落定 diff 仍能反推出来。

- `node dev/pace-probe.cjs` —— 纯函数层：LCS 删除判定、两行改动 ~1.36s、三行删除 ~1.26s、400 行写入 ~2.1s、240 行删除 12 拍。
- `node dev/pacing-probe.cjs` —— 用一个微型 hooks runtime + 假时钟把 `usePacing` 真跑一遍：等待流、落定后补播、换 callId 重置、`skip`、`pace=off`。能抓到"某段常量被误删导致 ReferenceError"这类崩溃（曾经发生过：重抽 SCENE 资源时把紧跟其后的 `SETTINGS` 一起覆盖掉，面板直接空白）。

注意：`SCENE` 资源块和 `SETTINGS` 常量相邻，重抽资源时替换区间只能是 `const SCENE = {` 到紧随其后的 `/** The two file-mutation calls...`，不要把 SETTINGS 卷进去。

## 已知限制 / 待办

- 关闭状态只在组件内存，切会话回来会重置
- 没有配置项（自动打开不可关、颜色不可配）
- 单文件最多渲染 1500 行（`MAX_FILE_VIEW`）；diff 中间段超过 500×500 行退化成整段标记
- "缩小替换"的颜色在参数收尾那一刻从绿翻红（有过渡但不完美）
- PTC 子调用的参数是一次到齐的，没有逐字流：回放的是整段内容，不是真的一行行 stream 出来
- PTC 写入可能比“读原文件”先完成；这时无法知道原文，面板按“整段新内容”演（edit 会用 `old_string` 反推，write 只能全标记）
- 未做：背景打开（保留用户当前 tab）、超长文件视口虚拟化、`apply_patch` 支持
- 场景尺寸固定在 `.dcl-scene`（高 168px、宽 min(440px,100%)）；它没有底板：容器和 `.scene` 背景都透明、边框/投影去掉、`.screen-glow` 隐藏、顶部 26% 渐变遮罩。改大小/位置只动这一条规则
