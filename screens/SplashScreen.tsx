import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../types';

const SplashScreen = ({navigation, route}: Props) => {
  return <View></View>;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;
