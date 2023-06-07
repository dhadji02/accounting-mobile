import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const Profile = ({ navigation }) => {
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [location, setLocation] = useState('New York City, USA');
  const [isEditMode, setIsEditMode] = useState(false);

  const handleGoBack = () => {
    navigation.navigate('Home');
  };

  const logOut = () => {
    navigation.navigate('Login');
  };

  const handleSaveChanges = () => {
    // Perform save logic here
    setIsEditMode(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topMenuBar}>
        <TouchableOpacity style={styles.menuItem} onPress={handleGoBack}>
            <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/iconUser.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileBio}>Software Developer</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email</Text>
          {isEditMode ? (
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          ) : (
            <Text style={styles.infoText}>{email}</Text>
          )}
          <Text style={styles.infoLabel}>Phone</Text>
          {isEditMode ? (
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter phone"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          ) : (
            <Text style={styles.infoText}>{phone}</Text>
          )}
          <Text style={styles.infoLabel}>Location</Text>
          {isEditMode ? (
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              placeholder="Enter location"
              placeholderTextColor="#999"
            />
          ) : (
            <Text style={styles.infoText}>{location}</Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.actionBar}>
        <TouchableOpacity
          style={[styles.logOutButton]}
          onPress={logOut}
        >
          <Text style={styles.actionButtonText}>Logout</Text>
        </TouchableOpacity>
        {isEditMode ? (
          <TouchableOpacity style={styles.actionButton} onPress={handleSaveChanges}>
            <Text style={styles.actionButtonText}>Save Changes</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.actionButton, styles.editButton]}
            onPress={() => setIsEditMode(true)}
          >
            <Text style={styles.actionButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.menuBar}>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Hub</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topMenuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop: 40, // Add top padding to prevent overlap
  },
  contentContainer: {
    justifyContent: 'center',
    paddingBottom: 60, // Adjust this value as needed to make space for the action bar
    paddingTop: 20, // Add top padding to prevent overlap
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 16,
    color: '#666',
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  actionBar: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logOutButton: {
    backgroundColor: '#0C6AEB',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  actionButton: {
    backgroundColor: '#0C6AEB',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  editButton: {
    backgroundColor: '#FFC107',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItem: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  back: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Profile;
