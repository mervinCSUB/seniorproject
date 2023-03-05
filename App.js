import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { Image } from 'react-native';

/* View -> UIView */
export default function App() {
  console.log("App Executed");
  const handlePress = () => console.log("Text pressed");
  console.log(require("./assets/icon.png"));

  return (
     <View style={styles.container}>
      <ImageBackground source={require('./assets/background-image.jpg')} resizeMode="cover" style={styler.image}>
          <Text style={styles.text} onPress={handlePress}>PickUp</Text>
          <Text style={styles.text} onPress={handlePress}>FindRuns</Text>
          <Text style={styles.text} onPress={handlePress}>NearYou</Text>
          <StatusBar style="auto"/>
        </ImageBackground>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 42,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    lineHeight: 38,

  },
  text2: {
    fontSize: 24,
    color: 'red',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    textAlign: 'center',
    lineHeight: 0,
  }
});

const styler = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 1,
    width: 500,
    backgroundColor:  'rgba(52, 52, 52, 0.8)',
  },  
});