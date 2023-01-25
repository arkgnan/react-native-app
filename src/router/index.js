import React, {useContext} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  HomeScreen,
  SplashScreen,
  RegisterScreen,
  LoginScreen,
  AboutScreen,
} from '../pages';
import {TouchableOpacity, ToastAndroid} from 'react-native';
import {GlobalContext} from '../context/GlobalContext';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'FAQ',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  const {state} = useContext(GlobalContext);
  const {setJokes} = state;
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                setJokes([]);
                ToastAndroid.show('Clear All Jokes!', ToastAndroid.SHORT);
              }}>
              <MaterialCommunityIcons name="notification-clear-all" size={26} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
        initialParams={{isRegister: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
