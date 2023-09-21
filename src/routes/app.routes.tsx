// ASSETS
import Home from '@assets/icons/home.svg';
import Settings from '@assets/icons/settings.svg';
import Shopping from '@assets/icons/shopping.svg';

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
      <Screen
        name="Compras"
        component={Welcome}
        options={{
          tabBarIcon: ({color}) => (
            <Shopping width={30} height={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Ajustes"
        component={Welcome}
        options={{
          tabBarIcon: ({color}) => (
            <Settings width={30} height={30} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
