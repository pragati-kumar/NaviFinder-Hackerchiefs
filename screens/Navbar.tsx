import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {Icon} from 'react-native-elements';

const Navbar = ({route, navigation}) => {
  return (
    <View style={styles.navbar}>
          {/* <View style={styles.ic}>
            <Icon color="#8E91A5" name="map" type="font-awesome" />
            <Text style={styles.icText}> Explore </Text>
          </View> */}
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Home')}>
            <View style={styles.ic}>
              <Icon color="#8E91A5" name="map" type="font-awesome" />
            <Text style={styles.icText}> Explore </Text>
            </View>
          </TouchableWithoutFeedback>


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

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('LocShare')}>
          <View style={styles.ic}>
            <Icon color="#8E91A5" name="share" type="font-awesome" />
            <Text style={styles.icText}> Share </Text>
          </View>
          </TouchableWithoutFeedback>

          <View style={styles.ic}>
            <Icon color="#8E91A5" name="bars" type="font-awesome" />
            <Text style={styles.icText}> More </Text>
          </View>
        </View>
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
  
export default Navbar;
