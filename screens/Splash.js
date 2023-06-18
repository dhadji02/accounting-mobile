import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const MAX_DELAY = 500 // Maximum delay in milliseconds

const Splash = () => {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(1);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const adjustedDelay = MAX_DELAY * (loadingProgress + 1);

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('Login');
      });
    }, adjustedDelay);

    return () => clearTimeout(timer);
  }, [loadingProgress]);

  // Simulate loading progress for demonstration purposes
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prevProgress => prevProgress + 0.1); 
    }, 500);

    const completionTimeout = setTimeout(() => {
      setLoadingProgress(1); 
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completionTimeout);
    };
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image source={require('../assets/splash2.png')} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
});

export default Splash;
