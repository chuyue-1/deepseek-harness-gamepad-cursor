# Usage Guide / 使用教程

## Installation / 安装

Clone the repository, then open PowerShell in the repository root:

```powershell
git clone https://github.com/chuyue-1/deepseek-harness-gamepad-cursor.git
cd deepseek-harness-gamepad-cursor
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Restart `dsh web`, or use whatever way you normally launch DSH.

## Uninstall / 卸载

Run from the repository root:

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
| Keyboard `F9` | Show / hide cursor / 显示 / 隐藏光标 |

## Settings Panel / 设置面板

Press `Select` to open the settings panel.

- Move sensitivity / 移动灵敏度
- Wheel sensitivity / 滚轮灵敏度
- Snap strength / 吸附力度
- Cursor style / 光标样式

Use:
- Up / Down: select item / 选择项目
- Left / Right or LB / RB: adjust value / 调节数值
- A / B: close panel / 关闭面板

## Virtual Keyboard / 虚拟键盘

1. Move the cursor to an input box and press `A` to focus it.
2. Press `Y` to open the virtual keyboard at the top of the screen.
3. Use Left Stick / D-Pad to select a key, press `A` to enter it.
4. LB / RB simulate left / right arrow keys for text cursor movement.
5. `Shift` switches uppercase / symbols.
6. Press `Y` / `B` / `Select` to close.

## FAQ / 常见问题

- The virtual keyboard outputs ASCII directly and does not drive the system IME. For Chinese / IME input, use the physical keyboard.
- 虚拟键盘直接输出英文字符，不驱动系统输入法；中文输入请使用物理键盘 + 系统输入法。
- If the cursor disappears, press `Start` or `F9` to show it again.
- 如果光标消失，按手柄 `Start` 或键盘 `F9` 重新显示。
