import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('Profile');
  };

  const navigate1 = () => {
    navigation.navigate('Pair');
  };

  // Function that produces the profile circle
  const ProfileCircle = ({ initials }) => {
    return (
      <TouchableOpacity style={styles.profileCircle} onPress={navigate}>
        <Text style={styles.initials}>{initials}</Text>
      </TouchableOpacity>
    );
  };

  // Function to generate random initials
  const generateRandomInitials = () => {
    const letter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const letter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return letter1 + letter2;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>
        <ProfileCircle initials={generateRandomInitials()} />
        <View style={styles.flexEndContainer}>
          <TouchableOpacity style={[styles.menuItem, styles.marginRight]} onPress={navigate1}>
            <MaterialIcons name='bar-chart' size={30} color='#333' />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, styles.marginRight]}>
            <MaterialIcons name='star' size={30} color='#333' />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, styles.marginRight]}>
            <MaterialIcons name='notifications' size={30} color='#333' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.textBox}>Text</Text>
        <View style={styles.boxb}></View>
        <Text style={styles.textBox}>Text</Text>
        <View style={styles.boxw}></View>
      </View>

      <View style={styles.bottomMenu}>
        <View style={styles.bottomMenuItem}>
          <Image source={require('../assets/oneprop-icon.png')} style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuCaption}>Dashboard</Text>
        </View>
        <View style={styles.bottomMenuItem}>
          <MaterialIcons name='person-outline' size={30} color='#73787E' style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuCaption}>Account</Text>
        </View>
        <View style={styles.bottomMenuItem}>
          <MaterialIcons name='tune' size={30} color='#73787E' style={styles.bottomMenuIcon} />
          <Text style={styles.bottomMenuCaption}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F7',
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#778089',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  flexEndContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginLeft: 20, 
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  textBox: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'flex-start',
    marginLeft: 20,
    margin: 10,
  },
  boxb: {
    backgroundColor: '#2D64E2',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    height: '35%',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  boxw: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    width: '90%',
    height: '35%',
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
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  bottomMenuItem: {
    alignItems: 'center', 
  },
  bottomMenuIcon: {
    width: 30,
    height: 30,
  },
  bottomMenuCaption: {
    fontSize: 12,
    color: '#73787E',
    marginTop: 4,
  },
});

export default Home;
