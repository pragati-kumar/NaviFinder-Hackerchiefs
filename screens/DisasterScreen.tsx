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
  Image,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../types';

import {Icon} from 'react-native-elements';
import Navbar from './Navbar';

const Disaster = ({route, navigation}: Props) => {
  const createAlert = () =>
    Alert.alert(
      '',
      'Are you sure you want to broadcast your location to nearby Rescue Authorities?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );

  return (
    <SafeAreaProvider>
      {/* <StatusBar />
      <Text>Hello World</Text> */}
      <View>
        <View style={styles.toggleBtn}>
          <Button color="red" title="Panic Button" onPress={createAlert} />
        </View>

        <Image
          source={require('../assets/images/32600.jpg')}
          style={{width: '100%', height: '80%'}}
        />
      </View>

      <Navbar route={route} navigation={navigation} />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#F0F1F3',
  },

  toggleBtn: {
    padding: 2,
    width: '50%',
    marginTop: '5%',
    marginLeft: '25%',
    marginBottom: '5%',
    borderRadius: 20,
  },
  ic: {
    color: '#8E91A5',
    width: 60,
    paddingTop: 15,
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
});

type Props = NativeStackScreenProps<RootStackParamList, 'Disaster'>;

export default Disaster;
