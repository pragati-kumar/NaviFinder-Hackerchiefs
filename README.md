## SIH 2022

### Installation Steps:

This guide assumes, node, npx, react-native cli have been installed

#### Basic Setup

- Clone this repository
- Inside the root directory, run `npm install`
- For local servers, replace the urls in axios commands with the one given by the Flask Application, `Ex: http://192.168.0.103:4000`

#### Running the application

- In a terminal / command window, in the root directory, run `npx react-native start` to start the metro server
- Connect a device to the system
  - **Hardware**
    - Connect the device through usb, turn on USB debugging inside the device
  - **Emulator**
    - Start the AVD service
- In another terminal instance, in the root directory, run `npx react-native run-android`

The app should be now running on your preferred device :tada:
