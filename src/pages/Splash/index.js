import {ImageBackground, StyleSheet, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {SplashBackground, Logo} from '../../assets';
import {GlobalContext} from '../../context/GlobalContext';

const SplashScreen = ({navigation}) => {
  const {handleFunction} = useContext(GlobalContext);
  const {handleCheckLogin} = handleFunction;
  useEffect(() => {
    setTimeout(() => {
      console.log('open app');
      handleCheckLogin()
        .then(res => {
          console.log(res);
          navigation.replace('MainApp');
        })
        .catch(e => {
          navigation.replace('Login');
        });
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
