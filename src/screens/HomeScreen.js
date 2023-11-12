import React, { ImageBackground } from 'react-native';
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <ImageBackground style={{width: 360, height:140}}
      source={require('./foto/mbl.jpg')}>
        <Text style={{fontSize: 20, color: '#fafafa', textAlign: 'center'}}>JAUHARI SHOWROOM</Text>
      </ImageBackground>

      <ImageBackground style={{width: 360, height:140}}
      source={require('./foto/mbl.jpg')}>
        <Text style={{fontSize: 20, color: '#fafafa', textAlign: 'center'}}>JAUHARI SHOWROOM</Text>
      </ImageBackground>

      <View style={{flexDirection: 'row', marginTop: 30}}>
      <TouchableOpacity style= {{flex: 1}}
      onPress={() => navigation.navigate('MobilScreen')}>
        <Text style={{fontSize: 30, paddingHorizontal: 30}}> MOBIL </Text>
      </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}
        onPress={() => navigation.navigate('MotorScreen')}>
          <Text style={{fontSize: 30, paddingHorizontal: 30}}> MOTOR </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{marginTop: 20}}
      onPress={() => navigation.navigate('UserScreen')}>
        <Text style={{textAlign: 'center', fontSize: 30}}>  USER </Text>
      </TouchableOpacity>

      <ImageBackground style={{width: 360, height:140, marginTop: 30}}
      source={require('./foto/mbl.jpg')}>
        <Text style={{fontSize: 20, color: '#fafafa', textAlign: 'center'}}>JAUHARI SHOWROOM</Text>
      </ImageBackground>

      <ImageBackground style={{width: 360, height:140}}
      source={require('./foto/mbl.jpg')}>
        <Text style={{fontSize: 20, color: '#fafafa', textAlign: 'center'}}>JAUHARI SHOWROOM</Text>
      </ImageBackground>


    </View>
    
    
  );
}

export default HomeScreen;