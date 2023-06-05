import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {SafeAreaView, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [loaded] = useFonts({
    'BasierCircle-Regular': require('./fonts/BasierCircle-Regular.otf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView  style={styles.container}>
       <Image
          source={require('./assets/onepre.png')}
          style={{width:200, height: 100, marginBottom:20, alignSelf: 'center'}}
        /> 
      <View>
        <Text style={{fontSize: 27, textAlign:'center', paddingBottom:20, width:300, fontWeight: 'bold'}}>Welcome Back</Text>
        <View style={{flexDirection: 'row', padding:8, marginBottom:25,backgroundColor:"#EDEFF2", borderRadius:10}}>
          <MaterialIcons name='alternate-email' size={20} color="#666" style={{marginRight:5}}/>
          <TextInput style={{flex:1, paddingVertical:0}} placeholder= 'Email' keyboardType='email-address'/> 
        </View>
        <View style={{flexDirection: 'row', padding:8, backgroundColor:"#EDEFF2", borderRadius:10, marginBottom:25,}}>
          <Ionicons name='ios-lock-closed-outline' size={20} color="#666" style={{marginRight:5}}/>
          <TextInput style={{flex:1, paddingVertical:0}} placeholder= 'Password' secureTextEntry={true}/>
          <TouchableOpacity onPress={()=> {}}>
            <Text style={{color: '#0C6AEB', fontWeight:'bold', marginTop:4}}>Forgot?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=> {}} style={{backgroundColor: "#E6F0FD", padding: 20, borderRadius:10, marginBottom:30, textAlign:'center'}}>
          <Text style={{color: "#0C6AEB", fontWeight: '700', fontSize:16, textAlign:'center'}}>Login</Text>
        </TouchableOpacity>
        <View style ={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
        <Text>New here? </Text>
        <TouchableOpacity onPress={()=> {}}>
          <Text style={{color: "#0C6AEB", fontWeight: '700'}}>Register</Text>
        </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F7',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'BasierCircle-Regular',
  },
});
