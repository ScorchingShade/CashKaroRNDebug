import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const CleverTap = require('clevertap-react-native');

export default function App() {
  CleverTap.setDebugLevel(3);
  //Create notification channel for Android O and above
  CleverTap.createNotificationChannel("RNTesting", "React Native Testing", "React Native Testing", 4, true);
  //initialize the App Inbox


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
