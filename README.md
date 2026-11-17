# DSH Gamepad Cursor

A gamepad-controlled virtual cursor plugin for **DeepSeek Harness Web**.

一个用于 **DeepSeek Harness Web** 的手柄虚拟光标插件。

---

## Features / 功能

- Gamepad-controlled virtual cursor with mouse-compatible events.
- Default cursor style: circle with a center dot; optional animated sprite styles.
- Right stick simulates the mouse wheel; R3 simulates middle-click.
- Adjustable move sensitivity, wheel sensitivity, and snap strength.
- On-screen virtual keyboard for English letters / numbers / symbols, plus an offline pinyin layer for Chinese input.
- Pinyin mode: 407 toneless syllables to 3,612 Han characters with a candidate strip; `1`-`9` / `X` commit, no system IME required.
- LB / RB simulate the left / right arrow keys.
- Keyboard shortcuts: `F9` toggles the virtual cursor, `F8` cycles cursor styles.
- Starts disabled: opening DSH leaves the native cursor untouched until you enable the virtual cursor.

- 手柄控制的虚拟光标，派发与鼠标兼容的事件。
- 默认样式为圆形 + 中心点，另有多款动画精灵样式可选。
- 右摇杆模拟滚轮，R3 模拟鼠标中键。
- 移动灵敏度、滚轮灵敏度、吸附力度均可调节。
- 屏幕虚拟键盘，可输入英文 / 数字 / 符号，并内置离线拼音层用于中文输入。
- 拼音模式：407 个无声调音节对应 3,612 个汉字，带顶部候选条，`1`-`9` / `X` 上屏，不依赖系统输入法。
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
│   ├── dict-pinyin.json
│   ├── styles.json
│   └── assets/cursors/
├── scripts/               # Install / uninstall / build scripts / 脚本
│   ├── install.ps1
│   ├── uninstall.ps1
│   └── build-client.ps1
├── docs/                  # Documentation / 文档
│   ├── USAGE.md
│   ├── CUSTOMIZATION.md
│   └── PINYIN.md
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
- [Pinyin Input / 拼音输入](docs/PINYIN.md)
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

- The pinyin layer does not drive the system IME: Han characters are inserted as plain text through the same path as the ASCII keys, and it works fully offline.
- Pinyin input is single-syllable: commit `ni`, then type `hao`. There is no word or sentence prediction.
- Candidate ordering in `plugin/dict-pinyin.json` is partly derived from `iDvel/rime-ice` (GPL-3.0). Personal use is unaffected; regenerate the ordering from a non-GPL source before redistributing the data.
- 拼音层不驱动系统输入法：汉字以纯文本形式、走与英文字符相同的路径插入，完全离线可用。
- 拼音为单音节输入：先上屏 `ni`，再敲 `hao`；没有词组和整句联想。
- `plugin/dict-pinyin.json` 的候选排序部分取自 `iDvel/rime-ice`（GPL-3.0）。自己使用不受影响；再分发这份数据前请先换成非 GPL 的排序来源。
