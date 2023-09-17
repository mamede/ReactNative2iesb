import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '@screens/Welcome/Welcome';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Welcome">
      <Screen name="Welcome" component={Welcome} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
