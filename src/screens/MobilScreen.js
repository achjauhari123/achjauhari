import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MobilScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={{width: 300, height: 200}} 
      source={require('../screens/foto/mobil2.png')}/>
       <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('../screens/foto/mobil4.jpeg')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('../screens/foto/mobil3.jpeg')}/>
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

export default MobilScreen;
