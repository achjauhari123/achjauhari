import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MotorScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={{width: 300, height: 200}} 
      source={require('../screens/foto/motor1.webp')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('../screens/foto/motor2.jpg')}/>
       <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('../screens/foto/motor3.jpg')}/>
    </View>
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
