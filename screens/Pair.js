import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';

const Pair = () => {
  const [loaded] = useFonts({
    'BasierCircle-Regular': require('../fonts/BasierCircle-Regular.otf'),
  });

const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleButtonPress}>
        <MaterialIcons name='arrow-back' size={30} color='#73787E' />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/oneprop-logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.heading}>Welcome to Oneprop</Text>
      <Text style={styles.paragraph}>
        Oneprop helps you to manage your Oneprop information easily and securely. You will use this app to quickly view and update properties, client information, upload property images, approve your logins, and many more.
      </Text>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#265ABF"
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Pair Device</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    fontFamily: 'BasierCircle-Regular',
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: '#2D64E2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});

export default Pair;
