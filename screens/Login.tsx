import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {RootStackParamList} from '../types';
import { View,
} from 'react-native';
import { Button} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

const Login = () => {
   const [numb,setNumber] = useState(0) ;
  return (
    <View>
        <TextInput 
        placeholder='Phone Number' 
        secureTextEntry={false} 
        keyboardType='numeric'
        maxLength={10}
        onChangeText={(num) => {setNumber(parseInt(num));}} 
        />
        <Button title="Share Location" ></Button>
        <Button title="View Shared Location"></Button>
    </View>
  );
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default Login;
