import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/screens/login/Login';
import Signup from './src/components/screens/login/Signup';
import OTP from './src/components/screens/login/OTP';
import Name from './src/components/screens/login/Name';
import Password from './src/components/screens/login/Password';
import AppScreen from './src/components/screens/appscreens/AppScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="AppScreen" component={AppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
