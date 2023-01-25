import {createContext, useContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [jokes, setJokes] = useState([]);

  const storeUserSession = async $auth => {
    try {
      await EncryptedStorage.setItem(
        'user_session',
        JSON.stringify({
          email: $auth.email,
          uid: $auth.uid,
        }),
      );
    } catch (error) {
      // There was an error on the native side
    }
  };

  const handleCheckLogin = async () => {
    try {
      const session = await EncryptedStorage.getItem('user_session');
      console.log('session', session);
      if (session !== undefined && session != null) {
        console.log('is login true');
        setUser(JSON.parse(session));
        return session;
      } else {
        console.log('login dulu');
        throw false;
      }
    } catch (error) {
      // There was an error on the native side
      throw false;
    }
  };

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailValidError('email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailValidError('enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };

  const handleLogout = async () => {
    try {
      await EncryptedStorage.removeItem('user_session');
      console.log('clear session');
      setUser({});
      navigation.navigate('Login');
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    } catch (error) {
      // There was an error on the native side
    }
  };

  const handleLogin = password => {
    if (email === '' || password === '') {
      setErrorMessage('Email Atau Password tidak boleh kosong');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          const userInfo = auth().currentUser;
          setUser(userInfo);
          storeUserSession(userInfo);
          setErrorMessage('');
          navigation.navigate('MainApp');
          navigation.reset({
            index: 0,
            routes: [{name: 'MainApp'}],
          });
        })
        .catch(err => {
          setErrorMessage(err.message);
        });
    }
  };

  const handleRegister = password => {
    if (email === '' || password === '') {
      setErrorMessage('Email Atau Password tidak boleh kosong');
    } else {
      console.log(email);
      console.log(password);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res);
          navigation.navigate('Login', {isRegister: true});
        })
        .catch(err => {
          setErrorMessage(err.message);
        });
    }
  };

  let state = {
    user,
    email,
    setEmail,
    emailValidError,
    errorMessage,
    jokes,
    setJokes,
  };

  let handleFunction = {
    handleValidEmail,
    handleLogin,
    handleRegister,
    handleCheckLogin,
    handleLogout,
  };

  return (
    <GlobalContext.Provider value={{state, handleFunction}}>
      {children}
    </GlobalContext.Provider>
  );
};
