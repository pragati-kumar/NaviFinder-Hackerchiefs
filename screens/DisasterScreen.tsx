import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../types';

//const RootStack = createNativeStackNavigator<RootStackParamList>();

const Disaster = () => {

  return (
    <SafeAreaProvider>
      {/* <StatusBar />
      <Text>Hello World</Text> */}
      <View>
      <TouchableHighlight
        underlayColor="#FFFFFF"
        style={[
          styles.toggleBtn
        ]}
        >
        <Text
        style={[
          styles.toggleText
        ]}>
          {' '}
          Panic Btn{' '}
        </Text>
      </TouchableHighlight>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  toggleBtn: {
    color: 'red',
    padding: 12,
    width: '50%',
  },
  toggleText: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#8E91A5',
    fontWeight: 'bold',
  },
});

export default Disaster;
