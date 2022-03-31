import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Pusher from 'pusher-js/react-native';
const image = { uri: "https://img.freepik.com/free-vector/isometric-illustration-people-location-contact-map-application-smartphone_142963-366.jpg" };
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Switch, // for toggling location sharing on and off
    DeviceEventEmitter, // for emitting/listening custom events
    TouchableWithoutFeedback,
} from 'react-native';
import {RootStackParamList} from '../types';
import { Button, Image} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import Navbar from './Navbar';

const LocShare = ({route, navigation}: Props) => {
    // const [pusher,setPusher] = useState<Pusher|null>(null) ;
    const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MjQxZWQzZDQ3ZDlhN2NkMTI4MDNiNWEiLCJwaG9uZSI6Ijk2NTA4NjY5OTMifQ.rECSBX_ORiy0p0Mn0fX5NYLHUZ2mJMpXqj1cN0S4n5U';

    // DeviceEventEmitter.addListener('unsubscribe', (e) => {
    //     // let friend_id = this.state.subscribed_to;
    //     // this.pusher.unsubscribe(`private-friend-${friend_id}`);
    //   });
    // const toggleLocationSharing = () => {
  
        // let user_id = this.state.user.id;
        // if(!is_location_shared){
        //   this.pusher.unsubscribe(`private-friend-${user_id}`); // disconnect from their own channel
        //   if(this.watchId){
        //     navigator.geolocation.clearWatch(this.watchId);
        //   }
        // }else{
        //   this.user_channel = this.pusher.subscribe(`private-friend-${user_id}`);
        //   this.user_channel.bind('client-friend-subscribed', (friend_data) => {
  
        //     let friends_count = this.state.subscribed_friends_count + 1;
        //     this.setState({
        //       subscribed_friends_count: friends_count
        //     });
  
        //     if(friends_count == 1){ // only begin monitoring the location when the first subscriber subscribes
        //       this.watchId = navigator.geolocation.watchPosition(
        //         (position) => {
        //           var region = regionFrom(
        //             position.coords.latitude,
        //             position.coords.longitude,
        //             position.coords.accuracy
        //           );
        //           this.user_channel.trigger('client-location-changed', region); // push the data to subscribers
        //         }
        //       );
        //     }
        //   });  
  
        // }
    //   }
//   useEffect(()=>{
//     const p = new Pusher('1370141',{
//         authEndpoint:'',
//         cluster:'',
//         auth:{
//             params:{
//                 app_key : 'hackerchiefs'
//             }
//         }
//     })
//     setPusher(p) ;
//   })
  return (
    <View style={styles.div}>
        <Image source={image} style={styles.image}/>
        <TouchableWithoutFeedback>
            <View style={styles.ic}>
              {/* <Icon color="#8E91A5" name="map" type="font-awesome" /> */}
            <Text style={styles.icText}> Share Your Location </Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <View style={styles.ic}>
              {/* <Icon color="#8E91A5" name="map" type="font-awesome" /> */}
            <Text style={styles.icText}> View Shared Location </Text>
            </View>
          </TouchableWithoutFeedback>
        
        <Navbar route={route} navigation={navigation} />  
        {/* <Button title="Share Location" onPress={()=>{toggleLocationSharing();}}></Button>
        <Button title="View Shared Location"></Button> */}
    </View>
  );
};


const styles = StyleSheet.create({
    image : {
        height:'100',
        width:'100%',
        backgroundPosition:'cover',
        backgroundColor:'black',
    },
    div: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      backgroundColor: '#F0F1F3',
    //   backgroundImage
    },
    ic: {
      color: 'white',
      width: '50%',
      paddingTop: 10,
      backgroundColor:'#EA3924',
      borderRadius:5,
    },
    icText: {
      color: 'white',
      fontFamily: 'sans-serif',
      alignSelf: 'center',
    },
    
  });

type Props = NativeStackScreenProps<RootStackParamList, 'LocShare'>;

export default LocShare;
