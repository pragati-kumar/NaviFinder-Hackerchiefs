import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../types';

import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import {map, filter} from 'rxjs/operators';
import {Subscription} from 'rxjs/internal/Subscription';

setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms

const TestingScreen = ({route, navigation}: Props) => {
  const [speed, setSpeed] = useState(0);
  const [subscription, setSubscription] = useState<Subscription>();
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);

  const startNewSubsciption = () => {
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

  useEffect(() => {
    startNewSubsciption();
  }, []);

  return (
    <SafeAreaProvider>
      <View style={style.title}>
        <Text style={style.bigText}>Hello World</Text>
        <Text>Current Speed: {speed}</Text>
        <Button
          title={(subscriptionStatus ? 'Stop' : 'Start') + ' Monitoring Speed'}
          onPress={() => {
            console.log('Pressed');
            if (subscriptionStatus) {
              subscription?.unsubscribe();
              setSubscriptionStatus(false);
            } else {
              startNewSubsciption();
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
