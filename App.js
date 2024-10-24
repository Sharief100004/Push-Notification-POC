import React, { useEffect } from 'react'
import LoginScreen from './src/Login';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
  
export default function App() {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  messaging().onMessage(remoteMessage => {
    console.log('Foreground message:', remoteMessage);  // Display the notification to the user
  });
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('App opened by notification while in foreground:', remoteMessage);  // Handle notification interaction when the app is in the foreground
  });
  messaging().getInitialNotification().then(remoteMessage => {
    console.log('App opened by notification from closed state:', remoteMessage);  // Handle notification interaction when the app is opened from a closed state
  });
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  async function getFcmToken() {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('Your Firebase Token is:', fcmToken);

    } else {
      console.log('Failed to get FCM token');
    }
  }

  useEffect(() => {
    requestUserPermission()
    getFcmToken()
  }, [])

  return (
    <LoginScreen />
  )
}
