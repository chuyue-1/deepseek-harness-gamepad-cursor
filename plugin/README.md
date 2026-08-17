# @dsh-user/gamepad-cursor

Gamepad-controlled virtual cursor plugin for DeepSeek Harness Web.

## Features

- Default circle-dot cursor.
- Gamepad left stick / D-Pad movement.
- Mouse-compatible synthetic events.
- Animated sprite cursor styles.
- Adjustable sensitivity and snap strength.
- Right stick wheel, R3 middle-click.
- On-screen virtual keyboard (English / numbers / symbols).
- LB / RB simulate left / right arrow keys.

## Install

From the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

Or install this package directly with the official `dsh` plugin command from your harness directory:

```sh
dsh plugin --profile web add ../deepseek-harness-gamepad-cursor/plugin
```

If `dsh` is not on your `PATH` (common on Windows), use:

```sh
npx --yes @deepseek-ai/dsh plugin --profile web add ../deepseek-harness-gamepad-cursor/plugin
```

Restart `dsh web`, or use whatever way you normally launch DSH.

## Uninstall

From the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\uninstall.ps1
```

## Files

```text
plugin/
├── package.json       # dsh.client manifest
├── lib/index.js       # Node-side no-op
├── client.js          # Browser-side plugin logic
├── styles.json        # Cursor style manifest
├── assets/cursors/    # Sprite assets
└── README.md          # This file
```

## Customization

See `../docs/CUSTOMIZATION.md`.

After changing sprites or `styles.json`, run from the repository root:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\build-client.ps1
```

Then reinstall and restart DSH.
