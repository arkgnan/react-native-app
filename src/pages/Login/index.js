import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../../context/GlobalContext';
import AppButton from '../../components/ButtonCustom';

const LoginScreen = ({route, navigation}) => {
  const [password, setPassword] = useState('');
  const {state, handleFunction} = useContext(GlobalContext);
  const {handleValidEmail, handleLogin} = handleFunction;
  const {email, setEmail, emailValidError, errorMessage} = state;
  const {isRegister} = route.params;

  useEffect(() => {
    if (isRegister !== undefined) {
      if (isRegister) {
        Alert.alert('Success', 'Account berhasil dibuat');
      }
    }
  }, [isRegister]);

  useEffect(() => {
    if (errorMessage != '') {
      Alert.alert('Error', errorMessage);
    }
  }, [errorMessage]);
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={{marginBottom: 20}}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onChangeText={value => setPassword(value)}
          />
          {emailValidError ? (
            <Text style={styles.errorMessage}>{emailValidError}</Text>
          ) : null}
        </View>
        <AppButton
          title="login"
          backgroundColor="#007bff"
          onPress={() => handleLogin(password)}
        />
        <Text style={styles.devlider}>- or -</Text>
        <AppButton
          title="register"
          backgroundColor="#007bff"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  formContainer: {
    padding: 20,
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    alignItems: 'center',
    borderColor: '#eaeaea',
    borderRadius: 4,
    borderWidth: 1,
    color: '#7d7d7d',
    flexDirection: 'row',
    fontSize: 18,
    height: 54,
    justifyContent: 'center',
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  devlider: {
    textAlign: 'center',
  },
  primaryButton: {
    elevation: 8,
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  primaryButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  errorMessage: {
    color: 'red',
    marginTop: 3,
    marginBottom: 6,
  },
});
