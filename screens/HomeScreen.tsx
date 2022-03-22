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
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import FontAwesome, {
//   SolidIcons,
//   RegularIcons,
//   BrandIcons,
// } from 'react-native-fontawesome';
// import MapboxGL from '@react-native-mapbox-gl/maps';
// import style from '../assets/css/home.css' ;

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../types';

import {Icon} from 'react-native-elements';

const HomeScreen = ({route, navigation}: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.map}>
        <View style={styles.navbar}>
          <Icon name="person" />
          <Button title="Explore" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#0A95FF',
  },
  ic: {
    color: '#EA3924',
  },
  navbar: {
    backgroundColor: '#FFFFFF',
    verticalAlign: 'bottom',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
    width: '100%',
  },
});

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default HomeScreen;
