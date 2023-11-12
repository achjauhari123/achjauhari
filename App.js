import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextInputLogin from './src/screens/components/TextInputLogin';
import HomeScreen from './src/screens/HomeScreen';
import MobilScreen from './src/screens/MobilScreen';
import MotorScreen from './src/screens/MotorScreen';
import UserScreen from './src/screens/UserScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRoutName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="MobilScreen" component={MobilScreen} options={{headerShown: false}}/>
      <Stack.Screen name="MotorScreen" component={MotorScreen} options={{headerShown: false}}/>
      <Stack.Screen name="UserScreen" component={UserScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};


const Login = ({ navigation }) => {
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

        <View>
            <TouchableOpacity style={{backgroundColor: '#039be5', paddingVertical: 14, marginTop: 45, marginHorizontal: 90, borderRadius: 20, elevation: 5}}>
        <Text style={{color: '#fafafa', textAlign: 'center', fontWeight: 'bold'}} onPress={() => navigation.navigate ('HomeScreen')}> LOGIN </Text>
      </TouchableOpacity>

      <View style={{marginHorizontal: 20, flexDirection: 'row', marginTop: 30}}>
        <TouchableOpacity style={{flex: 1}}>
          <Text style={{fontWeight: 'bold'}}> SignUp </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Text style={{fontWeight: 'bold'}}> Forgot Password ? </Text>
        </TouchableOpacity>
      </View>
        </View> 
      
    </View>


  )
};

export default App;