# @dsh-user/gamepad-cursor

Gamepad-controlled virtual cursor plugin for DeepSeek Harness Web.

DeepSeek Harness Web 的手柄虚拟光标插件。

## Features / 功能

- Default circle-dot cursor. / 默认为圆形 + 中心点光标。
- Gamepad left stick / D-Pad movement. / 左摇杆 / 十字键移动光标。
- Mouse-compatible synthetic events. / 派发与鼠标兼容的合成事件。
- Animated sprite cursor styles. / 动画精灵光标样式。
- Adjustable sensitivity and snap strength. / 灵敏度与吸附力度可调。
- Right stick wheel, R3 middle-click. / 右摇杆模拟滚轮，R3 模拟中键。
- On-screen virtual keyboard (English / numbers / symbols). / 屏幕虚拟键盘（英文 / 数字 / 符号）。
- LB / RB simulate left / right arrow keys. / LB / RB 模拟左右方向键。
- Keyboard shortcuts: `F9` toggles the cursor, `F8` cycles cursor styles. / 键盘快捷键：`F9` 开关光标，`F8` 切换光标样式。
- Starts disabled so the native cursor is untouched when DSH opens. / 默认关闭，打开 DSH 时不改变系统光标。

## Install / 安装

From the repository root:

在仓库根目录运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Or install this package directly with the official `dsh` plugin command from your harness directory:

或者在你的 harness 目录中，用官方 `dsh` 插件命令直接安装本包：

```sh
dsh plugin --profile web add ../deepseek-harness-gamepad-cursor/plugin
```

If `dsh` is not on your `PATH` (common on Windows), use:

如果 `dsh` 不在 `PATH` 中（Windows 上很常见），可以使用：

```sh
npx --yes @deepseek-ai/dsh plugin --profile web add ../deepseek-harness-gamepad-cursor/plugin
```

Restart `dsh web`, or use whatever way you normally launch DSH.

重启 `dsh web`，或使用你平时启动 DSH 的方式。

## Uninstall / 卸载

From the repository root:

在仓库根目录运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\uninstall.ps1
```

## Files / 文件

```text
plugin/
├── package.json       # dsh.client manifest / dsh.client 清单
├── lib/index.js       # Node-side no-op / Node 侧空实现
├── client.js          # Browser-side plugin logic / 浏览器侧插件逻辑
├── styles.json        # Cursor style manifest / 光标样式清单
├── assets/cursors/    # Sprite assets / 精灵素材
└── README.md          # This file / 本文件
```

## Customization / 自定义

See `../docs/CUSTOMIZATION.md`.

参见 `../docs/CUSTOMIZATION.md`。

After changing sprites or `styles.json`, run from the repository root:

修改精灵或 `styles.json` 后，在仓库根目录运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\build-client.ps1
```

Then reinstall and restart DSH.

然后重新安装并重启 DSH。
