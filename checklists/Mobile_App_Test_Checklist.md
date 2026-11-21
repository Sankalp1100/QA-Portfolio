# Mobile App Test Checklist

A reusable checklist I use for Android and iOS apps (movie ticketing, food ordering, healthcare and loyalty apps). Tick each item per build.

## Install and launch
- [ ] Fresh install from Play Store / App Store / TestFlight works
- [ ] App opens in under 3 seconds on a mid-range phone
- [ ] Upgrade from the previous version keeps login and data
- [ ] Uninstall and reinstall works, no old data left behind
- [ ] Splash screen and app icon are correct on light and dark mode

## Login and account
- [ ] Login with OTP, email and social login
- [ ] Wrong OTP, expired OTP and resend timer
- [ ] Session stays after closing the app; logout clears it
- [ ] Login on a second device behaves as designed

## Interruptions
- [ ] Incoming call during booking / payment
- [ ] Notification, alarm or low-battery popup during a flow
- [ ] App sent to background and opened again (state is kept)
- [ ] Screen lock and unlock in the middle of a form
- [ ] Rotation portrait ↔ landscape (if supported)

## Network
- [ ] Wi-Fi ↔ mobile data switch during a request
- [ ] No internet: clear message and retry option
- [ ] Slow 3G: loaders shown, no double submit
- [ ] Airplane mode during payment: no double charge, clear status

## Permissions
- [ ] Location, camera, notification, storage asked only when needed
- [ ] Deny permission: app still works with a clear message
- [ ] Allow later from phone settings works

## Payments (movie / food apps)
- [ ] UPI, card, wallet and net-banking flows
- [ ] Payment success, failure and pending states
- [ ] Back button on payment page does not lose the booking
- [ ] Refund / cancellation flow and confirmation message
- [ ] Seat or order is released when payment fails

## UI and compatibility
- [ ] Small, large and notch screens; text not cut
- [ ] Font size set to large in phone settings
- [ ] Android versions (latest and 2 older) and iOS versions
- [ ] Dark mode
- [ ] Hindi / other languages if supported

## Push notifications and deep links
- [ ] Notification opens the right screen
- [ ] Deep link works when app is closed, in background and not installed
- [ ] Notification settings in the app are respected

## Before sign-off
- [ ] Smoke test on release build (not debug)
- [ ] Crash-free run of main flows
- [ ] All Critical and High bugs closed or accepted by the lead
- [ ] Release notes checked against what was tested

