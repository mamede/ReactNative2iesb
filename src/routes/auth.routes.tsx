import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();

// SCREENS
import {SignIn} from '@screens/SignIn/SignIn';
import {SignUp} from '@screens/SignUp/SignUp';

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="SignIn" component={SignIn} />

      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}