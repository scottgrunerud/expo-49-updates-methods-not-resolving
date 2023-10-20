# Splash Screen Race Condition MVP


### Reproduction Steps

1. Create a Android build by running: `eas build --profile production --local`
2. Install the generated APK onto your emulator
    * Emulator Specs:
    Pixel 4 -  arm64 - API Level 33
3. Send a update by running:  `eas update --branch production --message "test update"`
4. Observe the app frozen on the splash screen