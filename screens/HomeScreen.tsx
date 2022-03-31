/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNLocation from 'react-native-location';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {RootStackParamList} from '../types';
import WifiManager from 'react-native-wifi-reborn';
import {Icon} from 'react-native-elements';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import {Marker} from 'react-native-maps';
import Plotly from 'react-native-plotly';
import Geocoder from 'react-native-geocoder';
import messaging from '@react-native-firebase/messaging';
import {API_URL} from '../utils/global';

const HomeScreen = ({route, navigation}: Props) => {
  const [selected, setSelected] = useState('Outdoor');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [rssi, setRssi] = useState(0);
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MjQxZWQzZDQ3ZDlhN2NkMTI4MDNiNWEiLCJwaG9uZSI6Ijk2NTA4NjY5OTMifQ.rECSBX_ORiy0p0Mn0fX5NYLHUZ2mJMpXqj1cN0S4n5U';
  RNLocation.configure({
    distanceFilter: 0,
  });
  const onPressButton = () => {
    setSelected('Outdoor');
  };

  const reqIndoorCoordinates = async (trial: boolean) => {
    // requestWifiPermission() ;
    const level = await WifiManager.getCurrentSignalStrength();
    setRssi(level);
    const res = await axios.post(
      `${API_URL}/location/indoor`,
      {
        rssi: level,
        trial,
      },
      {
        headers: {
          'x-auth-token': token,
        },
      },
    );

    console.log('-------');
    console.log(res.data);
  };

  const onPressButton2 = async () => {
    setSelected('Indoor');
    // await requestWifiPermission();
    await reqIndoorCoordinates(true);
    setInterval(() => {
      reqIndoorCoordinates(false);
    }, 900);
  };

  const requestOutdoorCoordinates = async () => {
    let permission = await RNLocation.getCurrentPermission();

    if (permission.includes('authorized')) {
      const location = await RNLocation.getLatestLocation({timeout: 100});

      console.log(
        location,
        location?.longitude,
        location?.latitude,
        location?.timestamp,
      );
      setLatitude(location?.latitude ?? 0);
      setLongitude(location?.longitude ?? 0);

      const response = await axios.post(
        `${API_URL}/location/outdoor`,
        {
          latitude: location?.latitude ?? 0,
          longitude: location?.longitude ?? 0,
          modelName: DeviceInfo.getModel(),
          trial: true,
        },
        {
          headers: {
            'x-auth-token': token,
          },
        },
      );

      console.log(response.data);

      const {latitude, longitude} = response.data;

      setLatitude(latitude);
      setLongitude(longitude);

      const NY = {
        lat: latitude,
        lng: longitude,
      };

      const positions = await Geocoder.geocodePosition(NY);

      // res is an Array of geocoding object (see below)
      console.log('PIN CODE ------------ ');
      console.log(positions[0].postalCode);

      const lastPincode = await pincode();

      if (positions[0].postalCode != lastPincode) {
        await messaging().unsubscribeFromTopic(lastPincode!);
        await messaging().subscribeToTopic(positions[0].postalCode);
      }

      await AsyncStorage.setItem('pin_code', positions[0].postalCode);
    }
  };

  const pincode = async () => {
    const pin_code = (await AsyncStorage.getItem('pin_code')) ?? '';

    console.log('Local storage pin code -> ' + pin_code);

    return pin_code;
  };

  useEffect(() => {
    requestOutdoorCoordinates();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.map}>
        <View style={styles.toggle}>
          <TouchableHighlight
            underlayColor="#FFFFFF"
            style={[
              styles.toggleBtn,
              selected == 'Indoor' && styles.selectedBtn,
              selected == 'Indoor' && styles.selectedIn,
            ]}
            onPress={onPressButton2}>
            <Text
              style={[
                styles.toggleText,
                selected == 'Indoor' ? styles.selectedBtn : {},
              ]}>
              {' '}
              Indoor{' '}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#FFFFFF"
            style={[
              styles.toggleBtn,
              selected == 'Outdoor' && styles.selectedBtn,
              selected == 'Outdoor' && styles.selectedOut,
            ]}
            onPress={onPressButton}>
            <Text
              style={[
                styles.toggleText,
                selected == 'Outdoor' ? styles.selectedBtn : {},
              ]}>
              {' '}
              Outdoor{' '}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.mp}>
          {selected == 'Outdoor' ? (
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.mpview}
              region={{
                latitude,
                longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
              <Marker
                coordinate={{
                  latitude,
                  longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
              />
            </MapView>
          ) : (
            <Plotly
              // data={[trace]}
              // layout={{ title: 'Plotly.js running in React Native!' }}
              style={{borderWidth: 1, borderColor: 'green'}}
              data={[
                {
                  x: [4, 5, 6],
                  y: [8, 9, 10],
                  z: [4, 5, 8],
                  text: ['You', 'Target 1', 'Target 2'],
                  textposition: 'bottom',
                  type: 'scatter3d',
                  mode: 'lines+markers+text',
                  marker: {color: 'red'},
                  scene: 'scene3',
                },
              ]}
              layout={{
                // width: '100%',
                // height: 900,
                title: 'Fancy Plot',
                scene3: {
                  domain: {
                    x: [0.5, 0.99],
                    y: [0.5, 1],
                  },
                  camera: {
                    center: {x: 0, y: 0, z: 0},
                    eye: {x: 2.5, y: 0.1, z: 0.1},
                    up: {x: 0, y: 0, z: 1},
                  },
                },
              }}
              // update={update}

              enableFullPlotly
            />
          )}
        </View>

        <View style={styles.navbar}>
          <View style={styles.ic}>
            <Icon color="#8E91A5" name="map" type="font-awesome" />
            <Text style={styles.icText}> Explore </Text>
          </View>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Disaster')}>
            <View style={styles.ic}>
              <Icon color="#8E91A5" name="warning" />
              <Text style={styles.icText}> Panic </Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.navigate}>
            <Icon color="white" name="location-arrow" type="font-awesome" />
          </View>

          <View style={styles.ic}>
            <Icon color="#8E91A5" name="person" />
            <Text style={styles.icText}> Profile </Text>
          </View>

          <View style={styles.ic}>
            <Icon color="#8E91A5" name="bars" type="font-awesome" />
            <Text style={styles.icText}> More </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mpview: {
    height: '100%',
    width: '100%',
  },
  mp: {
    elevation: -5,
    height: '90%',
    width: '100%',
  },
  map: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#F0F1F3',
  },
  navigate: {
    width: 60,
    height: 60,
    backgroundColor: '#EA3924',
    borderRadius: 100,
    marginTop: -18,
    elevation: 5,
    paddingTop: 17,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  selectedBtn: {
    backgroundColor: '#EA3924',
    color: '#FFFFFF',
  },
  selectedOut: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  selectedIn: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  toggle: {
    position: 'absolute',
    alignSelf: 'center',
    top: '6.5%',
    height: '7%',
    width: '50%',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    elevation: 5,
    zIndex: 2,
  },
  toggleBtn: {
    color: 'black',
    padding: 12,
    width: '50%',
  },
  toggleText: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#8E91A5',
    fontWeight: 'bold',
  },
  ic: {
    color: '#8E91A5',
    width: 60,
    paddingTop: 10,
  },
  icText: {
    color: '#8E91A5',
    fontFamily: 'sans-serif',
    alignSelf: 'center',
  },
  navbar: {
    backgroundColor: '#FFFFFF',
    verticalAlign: 'bottom',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '9%',
    width: '100%',
  },
});

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default HomeScreen;
