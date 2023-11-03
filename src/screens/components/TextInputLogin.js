import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TextInputLogin = (props) => {
    return (
        <View>
            <View style={{flexDirection: 'row', marginHorizontal: 15, marginTop: 20}}>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0', width: 50, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, elevation: 5}}>
             <Icon name= {props.icon} size={20} color="#757575" />
            </View>

            <TextInput value = {props.state}
            style={{backgroundColor: '#e0e0e0', flex:1, borderTopRightRadius: 20, borderBottomRightRadius: 20, elevation: 5}}
            placeholder={props.placeholder}
            onChangeText={text => props.set(text)}
            secureTextEntry={props.isPassword}
            />
            </View>
        </View>
    );
}

export default TextInputLogin;