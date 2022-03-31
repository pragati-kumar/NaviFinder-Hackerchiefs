import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {PermissionsAndroid, View} from 'react-native';
import {Image} from 'react-native-elements';
import {RootStackParamList} from '../types';
import WifiManager from 'react-native-wifi-reborn';
import RNLocation from 'react-native-location';

const SplashScreen = ({navigation, route}: Props) => {
  const requestLocationPermission = async () => {
    let permission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });
  };

  const requestWifiPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Thank you for your permission! :)');
        WifiManager.getCurrentWifiSSID().then(
          ssid => {
            console.log('Your current connected wifi SSID is ' + ssid);
          },
          () => {
            console.log('Cannot get current SSID!');
          },
        );
        WifiManager.getBSSID().then(
          bssid => {
            console.log('Your current connected wifi BSSID is ' + bssid);
          },
          () => {
            console.log('Cannot get current BSSSID!');
          },
        );

        WifiManager.getCurrentSignalStrength().then(
          level => {
            console.log('Your current connected wifi RSSI is ' + level);
          },
          () => {
            console.log('Cannot get current RSSI!');
          },
        );
      } else {
        console.log(
          'You will not able to retrieve wifi available networks list',
        );
      }
    } catch (err) {
      console.warn('err:***', err);
    }
  };

  const initialise = async () => {
    await requestWifiPermission();
    await requestLocationPermission();
    navigation.replace('Home');
  };

  useEffect(() => {
    initialise();
  }, []);

  return (
    <View>
      <Image source={require('../assets/images/logo.png')}></Image>
    </View>
  );
};

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default SplashScreen;
