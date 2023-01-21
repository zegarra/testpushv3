/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useEffect } from 'react';
 import {  StyleSheet,  Text,  Button, View,} from 'react-native';
 import messaging from '@react-native-firebase/messaging';

 // //token fcm
 const checkToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
     console.log(fcmToken);
  } 
 }
 
 checkToken();

 const App = () => {

   useEffect(()=>{
      const foregroundSubscriber = messaging().onMessage(async remoteMessage =>{console.log("Push notification recibida", remoteMessage)});

      const topicSubscriber = messaging().subscribeToTopic('AlonsoZegarra').then(()=> console.log('test de una notificacion AlonsoZegarra'));

      const backgroundSubscriber = messaging().setBackgroundMessageHandler(async(remoteMessage)=>{console.log('push en background',remoteMessage);})
      return ()=>{
        foregroundSubscriber();
        
      };
   },[]);

 
   return (
     <View style={{flex:1, backgroundColor: 'white',  alignItems: 'center', justifyContent: 'center'}}>

        <Text style={styles.sectionTitle}>
                soy un test de notificación
        </Text>
     </View>
   );
 }
 const styles = StyleSheet.create({
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     color: 'black',
   },
 });
 
 export default App;
 
 //yarn add @react-native-firebase/app
 //yarn add @react-native-firebase/messaging