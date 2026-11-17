# Pinyin Input / 拼音输入

The virtual keyboard has an offline pinyin layer, so the gamepad can type Chinese without a system IME.

虚拟键盘内置离线拼音层，手柄不依赖系统输入法也能输入中文。

## Why not the system IME / 为什么不驱动系统输入法

An IME such as Microsoft Pinyin or Sogou lives in the Windows TSF layer, below Chromium. Only real keyboard input reaches it: synthetic `KeyboardEvent`s never do, and neither does Electron's `webContents.sendInputEvent`. Driving it would require OS-level `SendInput` from a Host process plus a client-to-Host bridge — heavy, fragile, and it would fight the gamepad for focus.

微软拼音 / 搜狗这类输入法位于 Windows TSF 层，在 Chromium 之下。只有真实键盘输入才会进入它：合成的 `KeyboardEvent` 不会，Electron 的 `webContents.sendInputEvent` 也不会。要驱动它必须由 Host 进程做 OS 级 `SendInput`，再搭一条客户端到宿主的桥——工程重、易碎，还会和手柄抢焦点。

The DSH composer is a Lexical `contentEditable` that accepts any Unicode through the same `insertText` path as ASCII, so the pinyin layer inserts Han characters directly. Fully offline, no IME, no network.

DSH 的输入框是 Lexical 的 `contentEditable`，任意 Unicode 都走与 ASCII 相同的 `insertText` 路径，因此拼音层直接把汉字插进去。完全离线，不用输入法，不走网络。

## Controls / 操作

| Input / 输入 | Action / 功能 |
| --- | --- |
| `拼` key / `拼` 键 | Toggle pinyin ↔ English / 切换 拼音 ↔ 英文（模式会记住） |
| Letter keys / 字母键 | Append to the syllable buffer / 追加音节 |
| `1`–`9` | Commit candidate N / 直选第 N 个候选 |
| `X` | Commit the highlighted candidate / 上屏当前选中候选 |
| `LB` / `RB` | Move the candidate selection / 移动候选选择 |
| `Space` | Commit the first candidate / 上屏首个候选 |
| `⌫` (Backspace) | Trim one pinyin letter; delete text once the buffer is empty / 缓冲非空时退字母，空时删正文 |
| `B` | Same as `⌫` for the buffer, closes the keyboard when it is empty / 同上，缓冲空时关闭键盘 |

## Input model / 输入模型

Single syllable per commit: type `ni`, commit, then type `hao`. There is no phrase segmentation or prediction, and a keystroke that cannot extend the current buffer into a valid syllable is rejected with a toast.

单音节提交：先 `ni` 上屏，再敲 `hao`。没有词组切分和联想；当某个字母无法把当前缓冲扩展成合法音节时，会被拒绝并给出提示。

## Dictionary / 字典

- `plugin/dict-pinyin.json`: 407 toneless syllables → 3,612 Han characters, at most 12 candidates per syllable, ordered by corpus frequency (~26 KB).
- `plugin/client.js` embeds the same data between the `/*PINYIN_START*/` and `/*PINYIN_END*/` markers. To regenerate, replace only the JSON between them (keep it compact, single line).
- `scripts/build-client.ps1` only replaces the `var STYLES = …` block, so it leaves the pinyin data and the keyboard code untouched.

- `plugin/dict-pinyin.json`：407 个无声调音节 → 3,612 个汉字，每音节最多 12 个候选，按语料词频排序（约 26 KB）。
- `plugin/client.js` 在 `/*PINYIN_START*/` 与 `/*PINYIN_END*/` 标记之间内联了同一份数据。重新生成时只替换标记内的 JSON（保持紧凑单行）。
- `scripts/build-client.ps1` 只替换 `var STYLES = …` 那一段，不会动拼音数据和键盘代码。

## Sources and licenses / 来源与许可

| Data / 数据 | Source / 来源 | License / 许可 |
| --- | --- | --- |
| Character readings / 汉字读音 | `mozillazg/pinyin-data` (`kMandarin_8105.txt`, `kHanyuPinlu.txt`) | MIT; content from the Unicode Unihan database (Unicode Terms of Use) |
| Pronunciation-frequency weights, drives candidate ordering / 读音词频权重（决定排序） | `iDvel/rime-ice` (`cn_dicts/8105.dict.yaml`) | **GPL-3.0** |
| Character frequency ranks / 字频排名 | Jun Da's Modern Chinese Character Frequency List (via `ruddfawcett/hanziDB.csv`) | MIT |
| Output whitelist / 输出白名单 | GB 2312-80, filtered with Python's `gb2312` codec | — |

The first ordering tier comes from GPL-3.0 data. Personal use is unaffected; before redistributing this data, regenerate the ordering from a non-GPL source.

候选排序的一级权重来自 GPL-3.0 数据。自己使用不受影响；再分发这份数据前，请先用非 GPL 来源重新生成排序。

## Known limits / 已知限制

- Single-syllable input, no word or sentence prediction. / 单音节输入，无词组、整句联想。
- 3,612 characters in GB 2312's common range; rarer characters may have no candidates. / 覆盖 GB 2312 常用范围的 3,612 字，生僻字可能没有候选。
- Insertion uses `document.execCommand('insertText')`, the same path as the ASCII keys. / 插入使用 `document.execCommand('insertText')`，与英文字符同一条路径。
- Deletion tries a real `Backspace` keydown first (the editor deletes through its own keymap), then `execCommand('delete')`, then a manual range cut. Lexical swallows `execCommand` deletion at block and first-character boundaries, so the keydown path is required. / 删除先派发真实 `Backspace` keydown（编辑器按自己的模型删除），再退回 `execCommand('delete')`，最后手工剪裁范围。Lexical 会在块边界和首字符边界吞掉 `execCommand` 的删除，所以必须走 keydown。
