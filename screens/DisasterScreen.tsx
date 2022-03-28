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
  Alert
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../types';

//const RootStack = createNativeStackNavigator<RootStackParamList>();

const Disaster = () => {

  const createAlert = () =>
    Alert.alert(
      "",
      "Are you sure you want to broadcast your location to nearby Rescue Authorities?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
    <SafeAreaProvider>
      {/* <StatusBar />
      <Text>Hello World</Text> */}
      <View style={styles.toggleBtn}>
      <Button  color="red" title="Panic Button" onPress={createAlert}/>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  toggleBtn: {
    padding: 12,
    width: '50%',
    marginTop:'2%',
    marginLeft:'25%'
  }

});

export default Disaster;
