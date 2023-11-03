import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const LoginButton = () => {
    return (
        <View>
            <TouchableOpacity style={{backgroundColor: '#039be5', paddingVertical: 14, marginTop: 45, marginHorizontal: 90, borderRadius: 20, elevation: 5}}>
        <Text style={{color: '#fafafa', textAlign: 'center', fontWeight: 'bold'}}> LOGIN </Text>
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
    );
}

export default LoginButton;