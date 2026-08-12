#!/bin/sh
# Lightweight Gradle launcher for CI/Desktop use.
# GitHub Actions installs the pinned Gradle version before invoking this script.
set -eu
if command -v gradle >/dev/null 2>&1; then
  exec gradle "$@"
fi
printf '%s\n' 'Gradle is not installed or not on PATH.' >&2
printf '%s\n' 'In GitHub Actions, ensure the gradle/actions/setup-gradle step runs before ./gradlew.' >&2
exit 1
