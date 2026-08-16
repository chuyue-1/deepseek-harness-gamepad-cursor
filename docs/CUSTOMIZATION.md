# Style Customization / 改样式教程

Cursor styles are defined in `plugin/styles.json` and the sprite files live in `plugin/assets/cursors/`.

## Built-in Styles / 内置样式

- Default circle dot / 默认圆点
- Priest 1 / 2 / 3 / 牧师 1 / 2 / 3
- Skeleton 1 / 2 / 骷髅战士 1 / 2
- Skull / 骷髅头
- Vampire / 吸血鬼

## Modify an Existing Style / 修改已有样式

1. Open `plugin/styles.json`.
2. Find the style entry, for example:

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
4. Rebuild from the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\build-client.ps1
```

5. Reinstall from the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

6. Restart DSH.

## Add a New Style / 新增样式

1. Put your sprite PNG frames under `plugin/assets/cursors/` (4 frames per style is recommended).
2. Add a new entry in `plugin/styles.json`:

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
4. Reinstall and restart DSH.
5. Select the new style in the settings panel.

## Notes / 说明

- The `default` style has `"frames": null`, which means the built-in circle dot cursor is used.
- Images are embedded into `client.js` as base64, so you must run `build-client.ps1` after changing any sprite assets.
- `default` 样式的 `frames` 为 `null`，表示使用圆形 + 中心点。
- 图片会以 base64 内嵌到 `client.js`，修改素材后必须运行 `build-client.ps1`。
