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
import React,{useEffect,useState} from 'react';
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
import WifiManager from "react-native-wifi-reborn";
import { BleManager } from 'react-native-ble-plx';
import {Icon} from 'react-native-elements';

const requestWifiPermission = async () => {
  try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Cool Photo App Camera Permission",
            message:
              "Cool Photo App needs access to your camera " +
              "so you can take awesome pictures.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Thank you for your permission! :)");
//           WifiManager.isEnabled((isEnabled) => {
//             if (isEnabled) {
//               console.log("wifi service enabled");
//             } else {
//               console.log("wifi service is disabled");
//             }
//           });

          WifiManager.getCurrentWifiSSID().then(
            ssid => {
              console.log("Your current connected wifi SSID is " + ssid);
            },
            () => {
              console.log("Cannot get current SSID!");
            }
          );
          WifiManager.getBSSID().then(
              bssid => {
                console.log("Your current connected wifi BSSID is " + bssid);
              },
              () => {
                console.log("Cannot get current BSSSID!");
              }
            );

//        WifiManager.loadWifiList().then(
//          wifiStringList => {
//            var wifiArray = JSON.parse(wifiStringList);
//             console.log("wifiArray:",wifiArray);
//          },
//          () => {
//            console.log("Cannot get wifiList!");
//          }
//        );

        WifiManager.getCurrentSignalStrength().then(
          level => {
            console.log("Your current connected wifi RSSI is " + level);
          },
          () => {
            console.log("Cannot get current RSSI!");
          }
        );

        } else {
          console.log("You will not able to retrieve wifi available networks list");
        }
      } catch (err) {
        console.warn("err:***",err)
      }


};

const HomeScreen = ({route, navigation}: Props) => {
    const [selected,setSelected] = useState('Indoor') ;
    const onPressButton = () => {
        setSelected('Outdoor') ;
    }
  const onPressButton2 = () => {
      setSelected('Indoor') ;
  }

  return (
    <SafeAreaView>
      <View style={styles.map}>
        <View style={styles.toggle}>
         <TouchableHighlight underlayColor="#FFFFFF" style={[styles.toggleBtn,selected=='Indoor' && styles.selectedBtn , selected=='Indoor' && styles.selectedIn ]} onPress={onPressButton2}>
         <Text style={[styles.toggleText,selected=='Indoor'? styles.selectedBtn : {} ]}> Indoor </Text>
         </TouchableHighlight>
         <TouchableHighlight underlayColor="#FFFFFF" style={[styles.toggleBtn,selected=='Outdoor'&& styles.selectedBtn , selected=='Outdoor' && styles.selectedOut]}onPress={onPressButton}>
         <Text style={[styles.toggleText,selected=='Outdoor'? styles.selectedBtn : {} ]}> Outdoor </Text>
         </TouchableHighlight>
        </View>

        <Button title="request wifi permissions" onPress={requestWifiPermission} />

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
    justifyContent: 'space-between',
    backgroundColor: '#F0F1F3',
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
  selectedBtn : {
    backgroundColor : '#EA3924' ,
    color : '#FFFFFF',
  },
  selectedOut:{
    borderBottomRightRadius:10 ,
    borderTopRightRadius:10,
  },
  selectedIn : {
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
  },
  toggle : {
    alignSelf:'center' ,
    marginTop:'10%',
    height : '7%',
    width:'50%',
    backgroundColor : '#FFFFFF' ,
    display:'flex' ,
    flexDirection : 'row' ,
    justifyContent:'space-between',
    borderRadius:10,
  },
  toggleBtn : {
    color:'black',
    padding:12,
    width:'50%'
  },
  toggleText : {
    alignSelf:'center',
    fontSize:15 ,
    color:'#8E91A5' ,
    fontWeight : 'bold',
  } ,
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
