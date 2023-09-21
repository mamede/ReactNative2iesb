// ASSETS
import Home from '@assets/icons/home.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Welcome} from '@screens/Welcome/Welcome';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#319204',
        tabBarInactiveTintColor: '#d2d2d2',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
      }}>
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarIcon: ({color}) => (
            <Home width={30} height={30} color={color} />
          ),
        }}
      />
      <Screen name="Compras" component={Welcome} />
      <Screen name="Ajustes" component={Welcome} />
    </Navigator>
  );
}
