import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import { View,
} from 'react-native';
import { Button} from 'react-native-elements';
import {RootStackParamList} from '../types';

const Register = () => {
   
  return (
    <View>
        <Button title="Share Location" ></Button>
        <Button title="View Shared Location"></Button>
    </View>
  );
};

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default Register;
