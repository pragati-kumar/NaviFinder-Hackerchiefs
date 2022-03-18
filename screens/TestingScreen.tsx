import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../types';

const TestingScreen = ({route, navigation}: Props) => {
  return (
    <SafeAreaProvider>
      <Header />
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaProvider>
  );
};

type Props = NativeStackScreenProps<RootStackParamList, 'Testing'>;

export default TestingScreen;
