@echo off
where gradle >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
  echo Gradle is not installed or not on PATH.
  exit /b 1
)
gradle %*
