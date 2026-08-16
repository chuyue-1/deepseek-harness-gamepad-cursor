# Install @dsh-user/gamepad-cursor into the current machine's DSH Web profile.
# Usage: powershell -ExecutionPolicy Bypass -File .\install.ps1
$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $scriptDir
$pluginSrc = Join-Path $projectRoot 'plugin'
$dshHome = if ($env:DSH_HOME) { $env:DSH_HOME } else { Join-Path $env:USERPROFILE '.dsh' }
$pluginDest = Join-Path $dshHome 'profiles\node_modules\@dsh-user\gamepad-cursor'
$patchFile = Join-Path $dshHome 'profiles\web\cordis.patch.yml'

if (-not (Test-Path -LiteralPath (Join-Path $pluginSrc 'package.json'))) { throw "Plugin source not found: $pluginSrc" }
if (-not (Test-Path -LiteralPath $patchFile)) { throw "Web profile patch not found: $patchFile" }

Write-Host "==> Copying plugin to $pluginDest"
if (Test-Path -LiteralPath $pluginDest) {
  Remove-Item -LiteralPath $pluginDest -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $pluginDest | Out-Null
Get-ChildItem -LiteralPath $pluginSrc -Force | ForEach-Object {
  Copy-Item -LiteralPath $_.FullName -Destination $pluginDest -Recurse -Force
}

Write-Host '==> Checking cordis.patch.yml for gamepad-cursor'
$lines = [System.IO.File]::ReadAllLines($patchFile)
$hasPlugin = $false
foreach ($ln in $lines) {
  if ($ln -match 'gamepad-cursor') {
    $hasPlugin = $true
    break
  }
}

if ($hasPlugin) {
  Write-Host 'Already present, skipping patch.'
} else {
  Write-Host '==> Adding plugin row to cordis.patch.yml'
  $out = New-Object System.Collections.Generic.List[string]
  $removedPlaceholder = $false

  foreach ($ln in $lines) {
    if (-not $removedPlaceholder -and $ln.Trim() -eq '[]') {
      $removedPlaceholder = $true
      continue
    }
    $out.Add($ln)
  }

  while ($out.Count -gt 0 -and $out[$out.Count - 1].Trim() -eq '') {
    $out.RemoveAt($out.Count - 1)
  }

  $block = @(
    ''
    '# Load the gamepad-controlled virtual cursor as a DSH Web browser plugin.'
    '- insert:'
    '    - id: gamepad-cursor'
    "      name: '@dsh-user/gamepad-cursor'"
  )
  foreach ($b in $block) { $out.Add($b) }

  $newContent = $out -join "`r`n"
  $newContent = $newContent.TrimEnd() + "`r`n"
  $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($patchFile, $newContent, $utf8NoBom)
  Write-Host 'Patch updated.'
}

Write-Host 'Done. Please restart dsh web (or your DSH launcher).'
