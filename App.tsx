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
//import { createStackNavigator } from "@react-navigation/stack";

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

  const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
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
