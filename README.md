# Projectile Lab Android

This is the corrected Android Studio/Gradle project for the Projectile Lab app.

## Build with GitHub Actions

1. Put the contents of this folder at the root of your GitHub repository.
2. Open **Actions** and run **Build APK**.
3. Download the `projectile-lab-release` artifact from the successful workflow.
4. Extract `app-release.apk` and install it on Android.

The release build uses the standard Android debug signing configuration so the generated APK is directly installable for classroom/testing use. It is not a Play Store release signing key.
