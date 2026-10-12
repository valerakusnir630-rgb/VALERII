$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$skillstrataNode = Get-Command node -ErrorAction SilentlyContinue
if ($skillstrataNode) {
    & $skillstrataNode.Source server.mjs
} else {
    $skillstrataRuntime = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
    if (Test-Path -LiteralPath $skillstrataRuntime) {
        & $skillstrataRuntime server.mjs
    } else {
        Write-Host 'Node.js 22+ is required. Install it from nodejs.org, then run node server.mjs.'
        Read-Host 'Press Enter to close'
    }
}
