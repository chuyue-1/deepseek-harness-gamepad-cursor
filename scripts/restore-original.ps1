# restore-original.ps1 - Restore client.js from client.js.original.
# Usage: powershell -ExecutionPolicy Bypass -File .\scripts\restore-original.ps1
$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $scriptDir
$pluginDir = Join-Path $projectRoot 'plugin'
$original = Join-Path $pluginDir 'client.js'
$backup = Join-Path $pluginDir 'client.js.original'

if (-not (Test-Path -LiteralPath $backup)) {
  Write-Host 'No backup found. Nothing to restore.'
  exit 0
}

Copy-Item -LiteralPath $backup -Destination $original -Force
Write-Host 'Original client.js restored.'
