import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const UserScreen = () => {
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 30, marginTop: 20}}>User</Text>

      <View style={{
        backgroundColor:'#a1887f', 
        borderRadius: 15, 
        paddingHorizontal: 20, 
        marginHorizontal: 10,
        marginTop: 30,
        }}>
        <Text style={{ marginTop: 10, color: '#d7ccc8'}}>Username</Text>
        <TextInput placeholder='Masukkan User Name'/>
      </View>

      <View style={{
        backgroundColor:'#a1887f', 
        marginTop: 20, 
        borderRadius: 15,
        paddingHorizontal: 20, 
        marginHorizontal: 10,}}>
        <Text style={{marginTop: 10, color: '#d7ccc8'}}>Email</Text>
        <TextInput placeholder='Masukkan Email'/>
      </View>

      <View style={{
        backgroundColor:'#a1887f', 
        marginTop: 20, 
        borderRadius: 15,
        paddingHorizontal: 20, 
        marginHorizontal: 10,}}>
        <Text style={{marginTop: 10, color: '#d7ccc8'}}>Alamat</Text>
        <TextInput placeholder='Masukkan Alamat'/>
      </View>

      <View style={{
        backgroundColor:'#a1887f', 
        marginTop: 20, 
        borderRadius: 15,
        paddingHorizontal: 20, 
        marginHorizontal: 10,}}>
        <Text style={{marginTop: 10, color: '#d7ccc8'}}>No HP</Text>
        <TextInput placeholder='Masukkan No HP'/>
      </View>
      
    </View>
  );
};


export default UserScreen
