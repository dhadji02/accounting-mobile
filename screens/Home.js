import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform login logic
    // Assuming successful login, navigate to the "Login" screen
    navigation.navigate('Profile');
  };

  const handleViewTransactions = () => {
    // Navigate to the "Transactions" screen
    navigation.navigate('Login');
  };

  const handleViewReceipts = () => {
    // Navigate to the "Receipts" screen
    navigation.navigate('Receipts');
  };

  const handleExploreFeatures = () => {
    // Navigate to the "Features" screen
    navigation.navigate('Features');
  };

  const handleSettings = () => {
    // Navigate to the "Settings" screen
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={handleLogin}>
          <Image source={require('../assets/iconUser.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.menuItem}>Analytics</Text>
      </View>
      <TouchableOpacity style={styles.pill}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Account</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.button} onPress={handleViewTransactions}>
            <Text style={styles.buttonText}>View Last Transactions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleViewReceipts}>
            <Text style={styles.buttonText}>View Receipts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleExploreFeatures}>
            <Text style={styles.buttonText}>Explore Features</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSettings}>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomMenu}>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Hub</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F7',
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  pill: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: 120,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#0C6AEB',
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  box: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
});

export default Home;
