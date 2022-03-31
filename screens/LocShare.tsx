// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Pusher from 'pusher-js/react-native';
import { View,
    Switch, // for toggling location sharing on and off
    DeviceEventEmitter // for emitting/listening custom events
} from 'react-native';
import { Button} from 'react-native-elements';

const LocShare = () => {
    const [pusher,setPusher] = useState<Pusher|null>(null) ;
    const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MjQxZWQzZDQ3ZDlhN2NkMTI4MDNiNWEiLCJwaG9uZSI6Ijk2NTA4NjY5OTMifQ.rECSBX_ORiy0p0Mn0fX5NYLHUZ2mJMpXqj1cN0S4n5U';

    // DeviceEventEmitter.addListener('unsubscribe', (e) => {
    //     // let friend_id = this.state.subscribed_to;
    //     // this.pusher.unsubscribe(`private-friend-${friend_id}`);
    //   });
    const toggleLocationSharing = () => {
  
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
      }
  useEffect(()=>{
    const p = new Pusher('1370141',{
        authEndpoint:'',
        cluster:'',
        auth:{
            params:{
                app_key : 'hackerchiefs'
            }
        }
    })
    setPusher(p) ;
  })
  return (
    <View>
        <Button title="Share Location" onPress={()=>{toggleLocationSharing();}}></Button>
        <Button title="View Shared Location"></Button>
    </View>
  );
};

// type Props = NativeStackScreenProps<RootStackParamList, ''>;

export default LocShare;
