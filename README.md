# DSH Gamepad Cursor

A gamepad-controlled virtual cursor plugin for **DeepSeek Harness Web**.

一个用于 **DeepSeek Harness Web** 的手柄虚拟光标插件。

---

## Features / 功能

- Gamepad-controlled virtual cursor with mouse-compatible events.
- Default cursor style: circle with a center dot; optional animated sprite styles.
- Right stick simulates the mouse wheel; R3 simulates middle-click.
- Adjustable move sensitivity, wheel sensitivity, and snap strength.
- On-screen virtual keyboard for English letters / numbers / symbols.
- LB / RB simulate the left / right arrow keys.
- Keyboard shortcuts: `F9` toggles the virtual cursor, `F8` cycles cursor styles.
- Starts disabled: opening DSH leaves the native cursor untouched until you enable the virtual cursor.

- 手柄控制的虚拟光标，派发与鼠标兼容的事件。
- 默认样式为圆形 + 中心点，另有多款动画精灵样式可选。
- 右摇杆模拟滚轮，R3 模拟鼠标中键。
- 移动灵敏度、滚轮灵敏度、吸附力度均可调节。
- 屏幕虚拟键盘，可输入英文 / 数字 / 符号。
- LB / RB 模拟左右方向键。
- 键盘快捷键：`F9` 开关虚拟光标，`F8` 切换光标样式。
- 默认不启用：打开 DSH 不会改变系统光标，直到你手动开启虚拟光标。

---

## Project Structure / 项目结构

```text
deepseek-harness-gamepad-cursor/
├── README.md              # Bilingual readme / 双语说明
├── NOTICE.md              # Authorship notice / 作者声明
├── plugin/                # DSH Web plugin source / 插件本体
│   ├── package.json
│   ├── lib/
│   ├── client.js
│   ├── styles.json
│   └── assets/cursors/
├── scripts/               # Install / uninstall / build scripts / 脚本
│   ├── install.ps1
│   ├── uninstall.ps1
│   └── build-client.ps1
├── docs/                  # Documentation / 文档
│   ├── USAGE.md
│   └── CUSTOMIZATION.md
└── assets/
    └── sprites/           # Original sprite assets / 原始素材
```

The virtual cursor UI, styles and sprites all live in `plugin/`; the PowerShell scripts install, uninstall and rebuild the client bundle.

虚拟光标的界面、样式与素材都在 `plugin/` 中；PowerShell 脚本负责安装、卸载和重新构建客户端 bundle。

---

## Installation / 安装

Clone the repository, then open PowerShell in the repository root and run:

克隆仓库，在仓库根目录打开 PowerShell 并运行：

```powershell
git clone https://github.com/chuyue-1/deepseek-harness-gamepad-cursor.git
cd deepseek-harness-gamepad-cursor
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Or install it through the official `dsh` plugin command from your harness directory:

或者在你的 harness 目录中，用官方 `dsh` 插件命令安装：

```sh
dsh plugin --profile web add ../deepseek-harness-gamepad-cursor/plugin
```

If `dsh` is not on your `PATH` (common on Windows), use:

如果 `dsh` 不在 `PATH` 中（Windows 上很常见），可以使用：

```sh
npx --yes @deepseek-ai/dsh plugin --profile web add ../deepseek-harness-gamepad-cursor/plugin
```

Restart `dsh web` after installation (or use whatever way you normally launch DSH).

安装后重启 `dsh web`，或使用你平时启动 DSH 的方式。

The plugin starts **disabled**: your native cursor works normally until you press `F9` (or gamepad `Start`) to bring up the virtual cursor.

插件启动时处于**关闭**状态：系统光标一切如常，按 `F9`（或手柄 `Start`）后才会显示虚拟光标。

## Uninstall / 卸载

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\uninstall.ps1
```

## Build / 构建

After modifying `styles.json` or sprite assets, regenerate `client.js`:

修改 `styles.json` 或精灵素材后，重新生成 `client.js`：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\build-client.ps1
```

If you installed via `dsh plugin add` (linked install), restarting DSH is enough; the copy-based `install.ps1` flow needs a reinstall.

如果你是通过 `dsh plugin add`（链接方式）安装的，重启 DSH 即可生效；使用 `install.ps1`（复制方式）安装时需要重新安装。

---

## Documentation / 文档

- [Usage Guide / 使用教程](docs/USAGE.md)
- [Style Customization / 改样式教程](docs/CUSTOMIZATION.md)
- [Notice / 声明](NOTICE.md)

---

## GitHub Topics / 推荐标签

Add these topics to the GitHub repository so it is easier to discover:

在 GitHub 仓库设置中添加以下 Topics，方便被搜索/发现：

```text
dsh-plugin
deepseek-harness
gamepad
cursor
```

---

## Authorship / 作者声明

All code in this repository was written by DeepSeek.

本仓库中的所有代码均由 DeepSeek 编写。

---

## Notes / 说明

- The virtual keyboard outputs ASCII characters directly and does not drive the system IME. For Chinese / IME input, use the physical keyboard.
- 虚拟键盘直接输出英文字符，不驱动系统输入法；中文输入请使用物理键盘 + 系统输入法。
