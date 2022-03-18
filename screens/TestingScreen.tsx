import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../types';

const TestingScreen = ({route, navigation}: Props) => {
  return (
    <SafeAreaProvider>
      <View style={style.title}>
        <Text style={style.bigText}>Hello World</Text>
      </View>
    </SafeAreaProvider>
  );
};

type Props = NativeStackScreenProps<RootStackParamList, 'Testing'>;

const style = StyleSheet.create({
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  bigText: {
    fontSize: 40,
  },
});

export default TestingScreen;
