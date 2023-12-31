import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MotorScreen = () => {
  return (
    <ScrollView>
     <View style={styles.container}>
      <Image style={{width: 300, height: 200}} 
      source={require('../screens/foto/motor1.webp')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('../screens/foto/motor5.jpg')}/>
       <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('../screens/foto/motor3.jpg')}/>
       <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/motor4.webp')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/motor6.webp')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/motor7.jpg')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/motor8.jpg')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/motor9.jpg')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/motor10.jpg')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/motor11.jpg')}/>
    </View>
    </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MotorScreen
