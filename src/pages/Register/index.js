import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../../context/GlobalContext';
import AppButton from '../../components/ButtonCustom';

const RegisterScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const {state, handleFunction} = useContext(GlobalContext);
  const {handleValidEmail, handleRegister} = handleFunction;
  const {email, setEmail, emailValidError, errorMessage} = state;

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
          title="register"
          backgroundColor="#007bff"
          onPress={() => handleRegister(password)}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;

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
  errorMessage: {
    color: 'red',
    marginTop: 3,
    marginBottom: 6,
  },
});
