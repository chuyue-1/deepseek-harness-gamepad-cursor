# DSH Gamepad Cursor

A gamepad-controlled virtual cursor plugin for **DeepSeek Harness Web**.

一个用于 **DeepSeek Harness Web** 的手柄虚拟光标插件。

---

## Features / 功能

- Gamepad-controlled virtual cursor with mouse-compatible events.
- Default cursor style: circle with a center dot.
- Optional animated sprite cursor styles.
- Right stick simulates mouse wheel; R3 simulates middle-click.
- Adjustable move sensitivity, wheel sensitivity, and snap strength.
- On-screen virtual keyboard for English / numbers / symbols.
- LB / RB simulate left / right arrow keys.
- The only keyboard shortcut is `F9` to toggle the cursor.

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

---

## Installation / 安装

Clone the repository, then open PowerShell in the repository root and run:

```powershell
git clone https://github.com/chuyue-1/deepseek-harness-gamepad-cursor.git
cd deepseek-harness-gamepad-cursor
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Restart `dsh web` after installation (or use whatever way you normally launch DSH).

安装后重启 `dsh web`，或使用你平时启动 DSH 的方式。

## Uninstall / 卸载

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\uninstall.ps1
```

## Build / 构建

After modifying `styles.json` or sprite assets, regenerate `client.js`:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\build-client.ps1
```

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
