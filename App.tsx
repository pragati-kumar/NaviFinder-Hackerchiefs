import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TestingScreen from './screens/TestingScreen';
import {RootStackParamList} from './types';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, Text} from 'react-native';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <StatusBar />
      <Text>Hello World</Text> */}
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Testing" component={TestingScreen} />
          <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
