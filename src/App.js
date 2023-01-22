// In App.js in a new project

import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Router from './router';
import {
  Provider as PaperProvider,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
const {LightTheme} = adaptNavigationTheme({reactNavigationLight: DefaultTheme});
// Import the functions you need from the SDKs you need
import {initializeApp, getApps} from 'firebase/app';
import {GlobalProvider} from './context/GlobalContext';
// TODO: Add SDKs for Firebase products that you want to use
// <https://firebase.google.com/docs/web/setup#available-libraries>

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwyanK5mh3PTG8BOayEREk2hcmxbzem6M',
  authDomain: 'tugas-sanbercode.firebaseapp.com',
  projectId: 'tugas-sanbercode',
  storageBucket: 'tugas-sanbercode.appspot.com',
  messagingSenderId: '724684582512',
  appId: '1:724684582512:web:d9251afb559b88bcfe4eb5',
};

// Initialize Firebase
// Doing checking to prevent app crash when hot reloading
if (!getApps().length) {
  initializeApp(firebaseConfig);
  console.log(getApps());
}

function App() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer theme={LightTheme}>
        <GlobalProvider>
          <Router />
        </GlobalProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
