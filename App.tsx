import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TestingScreen from './screens/TestingScreen';
import DisasterScreen from './screens/DisasterScreen';
import {RootStackParamList} from './types';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Alert, StatusBar, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';
//import {Notifications} from 'react-native-notifications';
import notifee from '@notifee/react-native';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

async function initFirebase() {
  await requestUserPermission();

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  const unsubscribe = messaging().onMessage(async remoteMessage => {
    //Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: remoteMessage.notification?.title,
      body: remoteMessage.notification?.body,
      android: {
        channelId,
      },
    });
  });

  return unsubscribe;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  React.useEffect(() => {
    initFirebase();
  }, []);

  return (
    <SafeAreaProvider>
      {/* <StatusBar />
      <Text>Hello World</Text> */}
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Disaster" component={DisasterScreen} />
          <RootStack.Screen name="Testing" component={TestingScreen} />
          <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
