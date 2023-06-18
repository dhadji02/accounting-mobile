import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = ({ navigation }) => {
  const [loaded] = useFonts({
    'BasierCircle-Regular': require('../fonts/BasierCircle-Regular.otf'),
  });

  const handleGoBack = () => {
    navigation.navigate('Home');
  };

  const logOut = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <MaterialIcons name='arrow-back' size={30} color='#73787E' />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.textBox}>Account</Text>
        <View style={styles.whiteBox}>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons name='person' size={30} color='#2D64E2' style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Profile Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons name='security' size={30} color='#2D64E2' style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Security and Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons name='settings' size={30} color='#2D64E2' style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Application Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons name='info' size={30} color='#2D64E2' style={styles.logoutIcon} />
            <Text style={styles.logoutText}>About Oneprop</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.whiteBox}>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons name='description' size={30} color='#2D64E2' style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Documents</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons name='gavel' size={30} color='#2D64E2' style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.whiteBox}>
          <TouchableOpacity onPress={logOut} style={styles.logoutButton}>
            <MaterialIcons name='logout' size={30} color='#2D64E2' style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.text}>Version 1.0</Text>
          <Text style={styles.text}>Oneprop Technologies</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    fontFamily: 'BasierCircle-Regular',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
  },
  whiteBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    width: '90%',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  textBox: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  text: {
    color: '#73787E',
  },
  bottomTextContainer: {
    alignItems: 'center',
    marginTop: 90,
  },
});

export default Profile;
