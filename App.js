import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextInputLogin from './src/screens/components/TextInputLogin';
import LoginButton from './src/screens/components/LoginButton';

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./src/screens/foto/logo.jpg')}
        style={{width: 355,height: 250}}
        />
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#212121'}}> JAUHARI SHOWROOM </Text>
        <Text style={{fontSize:25, marginTop: 20, fontWeight: 'bold'}}> Login </Text>
      </View>

      <TextInputLogin state={email} set={setEmail} icon = "envelope" placeholder = 'Masukkan Email' isPassword={false}/>
      <TextInputLogin state={password} set={setPassword} icon = "lock" placeholder = 'Masukkan Password' isPassword={true}/>

      <LoginButton />  
      
    </View>
  );
}

export default App;