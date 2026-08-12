# Projectile Lab — Android

A touch-friendly secondary-school projectile-motion teaching app.

## Build on GitHub

1. Upload the **contents of this project folder** to the root of your GitHub repository. The repository root must contain `gradlew`, `gradlew.bat`, `app/`, `gradle/`, `build.gradle`, and `settings.gradle`.
2. Push to `main`/`master`, or open **Actions → Build APK → Run workflow**.
3. When the workflow finishes, download the artifact named **projectile-lab-release**.
4. Inside the downloaded artifact is `app-release.apk`.

## Important

This repository includes a lightweight `gradlew` launcher that delegates to the pinned Gradle installation provisioned by GitHub Actions. It is intentionally self-contained for the CI workflow and avoids requiring a pre-generated binary Gradle wrapper JAR in the source archive.
