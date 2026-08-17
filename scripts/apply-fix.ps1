# apply-fix.ps1 - Apply client.fixed.js over client.js.
# The original client.js is backed up to client.js.original.
# Usage: powershell -ExecutionPolicy Bypass -File .\scripts\apply-fix.ps1
$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $scriptDir
$pluginDir = Join-Path $projectRoot 'plugin'
$original = Join-Path $pluginDir 'client.js'
$fixed = Join-Path $pluginDir 'client.fixed.js'
$backup = Join-Path $pluginDir 'client.js.original'

if (-not (Test-Path -LiteralPath $fixed)) { throw "Fixed client not found: $fixed" }
if (-not (Test-Path -LiteralPath $original)) { throw "Original client not found: $original" }

if (-not (Test-Path -LiteralPath $backup)) {
  Copy-Item -LiteralPath $original -Destination $backup -Force
  Write-Host "Backup created: $backup"
}

Copy-Item -LiteralPath $fixed -Destination $original -Force
Write-Host 'Fixed client.js applied. Run restore-original.ps1 to roll back.'
