# Style Customization / 改样式教程

Cursor styles are defined in `plugin/styles.json` and the sprite files live in `plugin/assets/cursors/`.

光标样式定义在 `plugin/styles.json` 中，精灵图片位于 `plugin/assets/cursors/`。

## Built-in Styles / 内置样式

- Default circle dot / 默认圆点
- Priest 1 / 2 / 3 / 牧师 1 / 2 / 3
- Skeleton 1 / 2 / 骷髅战士 1 / 2
- Skull / 骷髅头
- Vampire / 吸血鬼

## Modify an Existing Style / 修改已有样式

1. Open `plugin/styles.json`.
   打开 `plugin/styles.json`。
2. Find the style entry, for example:
   找到对应的样式条目，例如：

```json
"priest1": {
  "label": "牧师 1",
  "size": 48,
  "frames": [
    "priests_idle/priest1/v1/priest1_v1_1.png",
    "priests_idle/priest1/v1/priest1_v1_2.png",
    "priests_idle/priest1/v1/priest1_v1_3.png",
    "priests_idle/priest1/v1/priest1_v1_4.png"
  ]
}
```

3. Replace the PNG paths in `frames`, or change `size`.
   替换 `frames` 中的 PNG 路径，或修改 `size`。
4. Rebuild from the repository root:
   在仓库根目录重新构建：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\build-client.ps1
```

5. Reinstall from the repository root:
   在仓库根目录重新安装：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

6. Restart DSH.
   重启 DSH。

## Add a New Style / 新增样式

1. Put your sprite PNG frames under `plugin/assets/cursors/` (4 frames per style is recommended).
   把精灵 PNG 帧放到 `plugin/assets/cursors/` 下（建议每个样式 4 帧）。
2. Add a new entry in `plugin/styles.json`:
   在 `plugin/styles.json` 中新增条目：

```json
"my_style": {
  "label": "My Style",
  "size": 48,
  "frames": [
    "my_folder/my_1.png",
    "my_folder/my_2.png",
    "my_folder/my_3.png",
    "my_folder/my_4.png"
  ]
}
```

3. Run `scripts/build-client.ps1`.
   运行 `scripts/build-client.ps1`。
4. Reinstall and restart DSH.
   重新安装并重启 DSH。
5. Select the new style in the settings panel.
   在设置面板中选择新样式。

You can switch styles at any time with the keyboard shortcut `F8`, or in the gamepad settings panel (`Select`).

随时可以按键盘快捷键 `F8` 切换样式，或在手柄设置面板（`Select`）中选择。

## Notes / 说明

- The `default` style has `"frames": null`, which means the built-in circle dot cursor is used.
  `default` 样式的 `frames` 为 `null`，表示使用内置的圆形 + 中心点光标。
- Images are embedded into `client.js` as base64, so you must run `build-client.ps1` after changing any sprite assets.
  图片会以 base64 内嵌到 `client.js`，修改任何素材后都必须运行 `build-client.ps1`。
- If you installed via `dsh plugin add` (linked install), restarting DSH is enough after a rebuild; the copy-based `install.ps1` flow needs a reinstall.
  如果你是通过 `dsh plugin add`（链接方式）安装的，重新构建后重启 DSH 即可；使用 `install.ps1`（复制方式）安装时需要重新安装。
