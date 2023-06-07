import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [loaded] = useFonts({
    'BasierCircle-Regular': require('../fonts/BasierCircle-Regular.otf'),
  });

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy validation
    const validEmail = 'user@example.com'; // Dummy email for validation
    const validPassword = 'password123'; // Dummy password for validation

    if (email === validEmail && password === validPassword) {
      // Successful login
      navigation.navigate('Home');
    } else {
      // Invalid credentials, display error message or take appropriate action
      console.log('Invalid credentials');
    }
  };
  
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/onepre.png')}
        style={styles.logo}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name='alternate-email' size={20} color="#666" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder='Email' onChangeText={text => setEmail(text)} keyboardType='email-address' />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name='ios-lock-closed-outline' size={20} color="#666" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder='Password' onChangeText={text => setPassword(text)} secureTextEntry={true} />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgotText}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>New here? </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F7',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'BasierCircle-Regular',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 27,
    textAlign: 'center',
    paddingBottom: 20,
    width: 300,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 8,
    marginBottom: 25,
    backgroundColor: '#EDEFF2',
    borderRadius: 10,
    width: 300, // Adjust the width as needed
    alignItems: 'center',
  },
  inputIcon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 0,
  },
  forgotText: {
    color: '#0C6AEB',
    fontWeight: 'bold',
    marginTop: 4,
  },
  loginButton: {
    backgroundColor: '#E6F0FD',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    textAlign: 'center',
    width: 300, // Adjust the width as needed
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#0C6AEB',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  registerText: {
    color: '#000',
  },
  registerLink: {
    color: '#0C6AEB',
    fontWeight: '700',
  },
});

export default Login;
