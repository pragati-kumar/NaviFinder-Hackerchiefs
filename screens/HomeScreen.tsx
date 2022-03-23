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
import React,{useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableNativeFeedback,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
// import style from '../assets/css/home.css' ;

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../types';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('tk.eyJ1IjoicHJhbmphbGphaW41ODQiLCJhIjoiY2wxM2NxOTJiMDRyczNwbHFuenRieWJ3ZiJ9.TI2Iu1g49_kXNr5sUJro9A');
import {Icon} from 'react-native-elements';
MapboxGL.setConnected(true);

const HomeScreen = ({route, navigation}: Props) => {
useEffect(()=>{
//      MapboxGL.setTelemetryEnabled(false);
},[]) ;
  return (
    <SafeAreaView>
      <View style={styles.map}>
      <MapboxGL.MapView style={styles.map2} />
        <View style={styles.navbar}>

         <View style={styles.ic}>
             <Icon color='#8E91A5' name="map" type="font-awesome" />
             <Text style={styles.icText} > Explore </Text>
         </View>

        <View style={styles.ic}>
         <Icon color='#8E91A5' name="person" />
         <Text style={styles.icText} > Profile </Text>
         </View>

          <View style={styles.navigate}>
            <Icon color='white' name="location-arrow" type="font-awesome"  />
           </View>

          <View style={styles.ic}>
           <Icon color='#8E91A5' name="person" />
           <Text style={styles.icText} > Profile </Text>
            </View>

        <View style={styles.ic}>
         <Icon color='#8E91A5' name="bars" type="font-awesome" />
         <Text style={styles.icText} > More </Text>
          </View>
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
    backgroundColor: '#F0F1F3',
  },
  map2: {
      flex: 1
    },
  navigate : {
    width: 60 ,
    height: 60 ,
    backgroundColor:'#EA3924' ,
    borderRadius : 100,
    marginTop : -18,
    elevation : 5,
    paddingTop: 17 ,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  ic: {
    color: '#8E91A5',
    width: 60,
    paddingTop:10,
  },
  icText : {
    color:'#8E91A5',
    fontFamily : 'sans-serif' ,
    alignSelf : 'center' ,
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
