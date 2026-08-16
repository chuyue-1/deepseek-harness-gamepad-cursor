# Uninstall @dsh-user/gamepad-cursor from the DSH Web profile.
# Usage: powershell -ExecutionPolicy Bypass -File .\uninstall.ps1
$ErrorActionPreference = 'Stop'

$dshHome = if ($env:DSH_HOME) { $env:DSH_HOME } else { Join-Path $env:USERPROFILE '.dsh' }
$pluginDir = Join-Path $dshHome 'profiles\node_modules\@dsh-user\gamepad-cursor'
$patchFile = Join-Path $dshHome 'profiles\web\cordis.patch.yml'

# 1. Remove plugin package directory.
if (Test-Path -LiteralPath $pluginDir) {
  Write-Host "Removing plugin directory: $pluginDir"
  Remove-Item -LiteralPath $pluginDir -Recurse -Force
} else {
  Write-Host "Plugin directory not found, skipping: $pluginDir"
}

# 2. Remove the patch entry from cordis.patch.yml.
if (Test-Path -LiteralPath $patchFile) {
  Write-Host "Updating patch file: $patchFile"
  $lines = [System.IO.File]::ReadAllLines($patchFile)
  $out = New-Object System.Collections.Generic.List[string]
  $removed = $false
  $i = 0

  while ($i -lt $lines.Length) {
    $line = $lines[$i]

    if ($line -match '^\s*- insert:\s*$') {
      $j = $i + 1
      $block = New-Object System.Collections.Generic.List[string]
      $block.Add($line)

      # Collect the indented body of this insert block.
      while ($j -lt $lines.Length -and $lines[$j] -match '^\s+\S') {
        $block.Add($lines[$j])
        $j++
      }

      $blockText = $block -join "`n"
      if ($blockText -match 'gamepad-cursor') {
        # Remove the immediately preceding comment if it belongs to this plugin.
        if ($out.Count -gt 0 -and $out[$out.Count - 1] -match '^# Load the gamepad-controlled virtual cursor') {
          $out.RemoveAt($out.Count - 1)
        }
        $removed = $true
        Write-Host "Removed gamepad-cursor insert block from patch."
        $i = $j
        continue
      }

      foreach ($b in $block) { $out.Add($b) }
      $i = $j
      continue
    }

    $out.Add($line)
    $i++
  }

  if ($removed) {
    # If no real YAML entries remain, make sure the file is still a valid patch list.
    $hasEntry = $false
    foreach ($ln in $out) {
      $t = $ln.Trim()
      if ($t -ne '' -and -not $t.StartsWith('#')) {
        $hasEntry = $true
        break
      }
    }
    if (-not $hasEntry -and -not $out.Contains('[]')) {
      $out.Add('[]')
    }

    $newContent = $out -join "`r`n"
    $newContent = $newContent.TrimEnd() + "`r`n"
    if ($newContent.Trim() -eq '') {
      $newContent = "[]`r`n"
    }
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($patchFile, $newContent, $utf8NoBom)
    Write-Host "Patch file updated."
  } else {
    Write-Host "No gamepad-cursor patch entry found; patch file left unchanged."
  }
} else {
  Write-Host "Patch file not found, skipping: $patchFile"
}

Write-Host "Done. Please restart dsh web (or your DSH launcher)."
