# Usage Guide / 使用教程

## Installation / 安装

Clone the repository, then open PowerShell in the repository root:

克隆仓库，然后在仓库根目录打开 PowerShell：

```powershell
git clone https://github.com/chuyue-1/deepseek-harness-gamepad-cursor.git
cd deepseek-harness-gamepad-cursor
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Restart `dsh web`, or use whatever way you normally launch DSH.

重启 `dsh web`，或使用你平时启动 DSH 的方式。

> The virtual cursor starts **disabled**: opening DSH does not change or hide your native mouse cursor. Press `F9` (or gamepad `Start`) to enable it.
>
> 虚拟光标默认**关闭**：打开 DSH 不会改变或隐藏系统光标。按 `F9`（或手柄 `Start`）开启。

## Uninstall / 卸载

Run from the repository root:

在仓库根目录运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\uninstall.ps1
```

## Gamepad Controls / 手柄操作

| Input / 输入 | Action / 功能 |
| --- | --- |
| Left Stick / D-Pad / 左摇杆 / 十字键 | Move cursor / 移动光标 |
| A | Left click / 左键单击 |
| B | Right click / 右键单击 |
| X | Double click / 双击 |
| Right Stick Up/Down / 右摇杆上下 | Scroll wheel / 滚轮 |
| R3 (press right stick) / 按下右摇杆 | Middle click / 鼠标中键 |
| LB / RB | Left / Right arrow keys / 左右箭头键 |
| Y | Toggle virtual keyboard / 开关虚拟键盘 |
| Select | Toggle settings panel / 开关设置面板 |
| Start | Show / hide cursor / 显示 / 隐藏光标 |

## Keyboard Shortcuts / 键盘快捷键

| Key / 按键 | Action / 功能 |
| --- | --- |
| `F9` | Show / hide cursor / 显示 / 隐藏光标 |
| `F8` | Next cursor style / 切换下一个光标样式 |

`F8` also works while the virtual cursor is hidden — the chosen style is saved and used the next time you enable the cursor.

虚拟光标隐藏时也可以按 `F8` 切换样式，所选样式会被保存，下次开启时生效。

## Settings Panel / 设置面板

Press `Select` to open the settings panel.

按 `Select` 打开设置面板。

- Move sensitivity / 移动灵敏度
- Wheel sensitivity / 滚轮灵敏度
- Snap strength / 吸附力度
- Cursor style / 光标样式

Use:

操作方式：

- Up / Down: select item / 上下选择项目
- Left / Right or LB / RB: adjust value / 左右调节数值
- A / B: close panel / 关闭面板

## Virtual Keyboard / 虚拟键盘

1. Move the cursor to an input box and press `A` to focus it.
   将光标移动到输入框，按 `A` 聚焦。
2. Press `Y` to open the virtual keyboard at the top of the screen.
   按 `Y` 在屏幕顶部打开虚拟键盘。
3. Use Left Stick / D-Pad to select a key, press `A` to enter it.
   用左摇杆 / 十字键选择按键，按 `A` 输入。
4. LB / RB simulate left / right arrow keys for text cursor movement.
   LB / RB 模拟左右方向键移动文本光标。
5. `Shift` switches uppercase / symbols.
   `Shift` 切换大写 / 符号。
6. Press `Y` / `B` / `Select` to close.
   按 `Y` / `B` / `Select` 关闭。

## FAQ / 常见问题

- The virtual keyboard outputs ASCII directly and does not drive the system IME. For Chinese / IME input, use the physical keyboard.
- 虚拟键盘直接输出英文字符，不驱动系统输入法；中文输入请使用物理键盘 + 系统输入法。
- If the cursor disappears, press `Start` or `F9` to show it again.
- 如果光标消失，按手柄 `Start` 或键盘 `F9` 重新显示。
- Press `F8` to change the cursor style; the choice is remembered across restarts.
- 按 `F8` 切换光标样式，选择会在重启后保留。
