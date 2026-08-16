# build-client.ps1 - Regenerate client.js from styles.json + assets/cursors.
# Usage: powershell -ExecutionPolicy Bypass -File .\build-client.ps1
$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $scriptDir
$pluginDir = Join-Path $projectRoot 'plugin'
$stylesPath = Join-Path $pluginDir 'styles.json'
$clientPath = Join-Path $pluginDir 'client.js'
$assetRoot = Join-Path $pluginDir 'assets\cursors'

if (-not (Test-Path -LiteralPath $stylesPath)) { throw "styles.json not found: $stylesPath" }
if (-not (Test-Path -LiteralPath $clientPath)) { throw "client.js not found: $clientPath" }

$styles = Get-Content -LiteralPath $stylesPath -Raw -Encoding UTF8 | ConvertFrom-Json

$obj = [ordered]@{}
foreach ($prop in $styles.PSObject.Properties) {
  $key = $prop.Name
  $st = $prop.Value
  $entry = [ordered]@{
    label = $st.label
    size = [int]$st.size
  }
  if ($null -eq $st.frames) {
    $entry.frames = $null
  } else {
    $frames = @()
    foreach ($rel in $st.frames) {
      $path = Join-Path $assetRoot ($rel -replace '/', '\')
      if (-not (Test-Path -LiteralPath $path)) { throw "Sprite not found: $path" }
      $bytes = [System.IO.File]::ReadAllBytes($path)
      $b64 = [Convert]::ToBase64String($bytes)
      $frames += 'data:image/png;base64,' + $b64
    }
    $entry.frames = $frames
  }
  $obj[$key] = $entry
}

$json = $obj | ConvertTo-Json -Depth 4 -Compress
$text = [System.IO.File]::ReadAllText($clientPath, [System.Text.Encoding]::UTF8)
$marker = 'var STYLES = '
$start = $text.IndexOf($marker)
$endMarker = "`n    var STYLE_NAMES"
$end = $text.IndexOf($endMarker, $start)
if ($start -lt 0 -or $end -lt 0) { throw 'Could not locate STYLES block in client.js' }

$newText = $text.Substring(0, $start) + $marker + $json + $text.Substring($end)
[System.IO.File]::WriteAllText($clientPath, $newText, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "client.js regenerated: $((Get-Item $clientPath).Length) bytes"
