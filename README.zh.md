# LiveCode · 实时代码

[English](README.md) | 中文

**看着代码被写出来。**

平时 agent 改完文件，你只看到一个 diff，事情已经结束了。LiveCode 把那一小段时间演给你看，给自己带来更多情绪价值。

它不会让 agent 变快。它让等待的那段时间有东西可看——一种「现在正在被造出来」的确定感，这是它存在的理由。

面板底部还坐着一个角色——把那个看不见的 AI 显化成一个人，正在和你一起敲键盘。

## 功能

- **实时，原地。** 改动发生在文件真实的文字上，而不是另开一个 diff 窗口。
- **落定就是成品。** 调用结束后给你完整文件，改动过的行旁边一条安静的竖线。
- **一个文件一个标签。** 本次会话碰过的文件都在，面板自动跟到正在写的那个。
- **颜色属于这里。** 语法着色跟随宿主主题，不刺眼、不打架。
- **陪伴。** 写代码时快速敲击，超过 200 行键盘冒烟，空闲 5 分钟喝杯咖啡或茶，10 分钟小睡一会儿。

## 安装

LiveCode 是一个 DeepSeek Harness（DSH）Web GUI 插件包，没有构建步骤、没有依赖。

1. 设置 → 插件 → **添加插件**
2. 填这个目录的绝对路径
3. 启用 **实时代码 / LiveCode**，然后让 agent 改一个文件

或者在 agent 会话里：`plugin_manager install_bundle target=/绝对路径`。

## 使用

下一次 `write` / `edit` 时面板会自己打开。点标签回看文件，`×` 关掉，右键可关闭其他/全部。右上角齿轮切换人物、饮品，以及是否显示这个场景。

## 设置

齿轮里的选择会被记住。profile 也可以在 `cordis.patch.yml` 里设默认值：

```yaml
- id: dsh-code-live
  name: '@local/dsh-code-live'
  config:
    scene: true       # 显示底部角色
    sceneHeight: 168  # 120–280 px
    character: maid   # maid = 大肥鱼，mint = 小绿
    drink: coffee     # coffee | tea
```

## 开发

```bash
node dev/render-probe.cjs          # 无头渲染：空页 / 已落定 / 流式中
OPEN=1 node dev/render-probe.cjs   # 连弹窗和停留帧一起渲染
```

架构、决策和踩过的坑在 `HANDOFF.md`。

## 许可证

MIT © 2026 liyu，详见 [LICENSE](LICENSE)。
