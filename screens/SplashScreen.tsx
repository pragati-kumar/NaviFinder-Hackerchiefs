import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {RootStackParamList} from '../types';

const SplashScreen = ({navigation, route}: Props) => {
  useEffect(() => {
    navigation.navigate('Home');
  }, []);

  return (
    <View>
      <Image source={require('../assets/images/logo.png')}></Image>
    </View>
  );
};

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default SplashScreen;
