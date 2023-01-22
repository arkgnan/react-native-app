import {ImageBackground, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SplashBackground, Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      console.log('open app');
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);
  return (
    <ImageBackground source={SplashBackground} style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
});
