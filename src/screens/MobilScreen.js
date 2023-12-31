import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const MobilScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Image style={{width: 300, height: 200}} 
      source={require('../screens/foto/mobil2.png')}/>
       <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('../screens/foto/mobil4.jpeg')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('../screens/foto/mobil3.jpeg')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/mobil5.webp')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/mobil6.webp')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/mobil7.webp')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/mobil9.jpg')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/mobil10.jpg')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/mobil12.jpg')}/>
      <Image style={{width: 300, height: 200, marginTop: 30}}
      source={require('./foto/mobil113.jpg')}/>
      
      
      
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

export default MobilScreen;
