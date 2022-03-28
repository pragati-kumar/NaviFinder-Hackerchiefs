import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../types';

import {
  accelerometer,
  gyroscope,
  magnetometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import {map, filter} from 'rxjs/operators';
import {Subscription} from 'rxjs/internal/Subscription';

setUpdateIntervalForType(SensorTypes.accelerometer, 1000); // defaults to 100ms
setUpdateIntervalForType(SensorTypes.gyroscope, 1000); // defaults to 100ms

const TestingScreen = ({route, navigation}: Props) => {
  const [speed, setSpeed] = useState(0);
  const [gyro, setGyro] = useState(0) ;
  const [angle,setAngle] = useState(0) ;
  const [subscription, setSubscription] = useState<Subscription>();
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);
  const [gyroSubscription, setGyroSubscription] = useState<Subscription>();
  const [gyroStatus, setGyroStatus] = useState(false) ;
  const [magnetSubscription, setMagnetSubscription] = useState<Subscription>();
  const [magnetStatus, setMagnetStatus] = useState(false) ;

  const startNewSubscription = () => {
    const newSubscription = accelerometer
      .pipe(
        map(({x, y, z}) => x + y + z),
        filter(speed => speed > 2),
      )
      .subscribe(
        speed => {
          console.log(`You moved your phone with ${speed}`);
          setSpeed(speed);
        },
        error => {
          console.log('The sensor is not available');
        },
      );

    setSubscription(newSubscription);
    setSubscriptionStatus(true);
  };

 const startNewGyroSubscription = () => {
    const newGyroSubscription = gyroscope
      .pipe(
        map(({x, y, z}) => x + y + z)
      )
      .subscribe(
        val => {
          console.log(`Gyroscope value ${val}`);
          setGyro(val);
        },
        error => {
          console.log('The sensor is not available');
        },
      );

    setGyroSubscription(newGyroSubscription);
    setGyroStatus(true);
  };

  const startNewMagnetSubscription = () => {
      const newMagnetSubscription = magnetometer
        .pipe(
          map(({x, y, z}) => x + y + z),
//           filter(({x,y,z})=>{
//               if (Math.atan2(y, x) >= 0) {
//                 setAngle(Math.atan2(y, x) * (180 / Math.PI)) ;
//               } else {
//                 setAngle((Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI)) ;
//               }
//           }) ,
        )
        .subscribe(
          val => {
            console.log(`magnetometer value ${val}`);
//             setGyro(val);
          },
          error => {
            console.log('The sensor is not available');
          },
        );

      setMagnetSubscription(newMagnetSubscription);
      setMagnetStatus(true);
    };

  useEffect(() => {
//     startNewSubscription();
  }, []);

  return (
    <SafeAreaProvider>
      <View style={style.title}>
        <Text>Current Speed: {speed}</Text>
        <Button
          title={(subscriptionStatus ? 'Stop' : 'Start') + ' Monitoring Speed'}
          onPress={() => {
            console.log('Pressed');
            if (subscriptionStatus) {
              subscription?.unsubscribe();
              setSubscriptionStatus(false);
            } else {
              startNewSubscription();
            }
          }}
        />
        <Text>Current Gyroscope: {gyro}</Text>
        <Button
          title={(gyroSubscription ? 'Stop' : 'Start') + ' Monitoring Gyroscope'}
          onPress={() => {
            console.log('Pressed');
            if (gyroStatus) {
              gyroSubscription?.unsubscribe();
              setGyroStatus(false);
            } else {
              startNewGyroSubscription();
            }
          }}
        />
        <Text>Current Magnetometer: {angle}</Text>
        <Button
          title={(magnetSubscription ? 'Stop' : 'Start') + ' Monitoring Magnetometer'}
          onPress={() => {
            console.log('Pressed');
            if (magnetStatus) {
              magnetSubscription?.unsubscribe();
              setMagnetStatus(false);
            } else {
              startNewMagnetSubscription();
            }
          }}
        />
      </View>
    </SafeAreaProvider>
  );
};

type Props = NativeStackScreenProps<RootStackParamList, 'Testing'>;

const style = StyleSheet.create({
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  bigText: {
    fontSize: 40,
  },
});

export default TestingScreen;
