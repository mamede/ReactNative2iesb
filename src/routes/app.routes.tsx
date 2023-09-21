// ASSETS
import HomeIcon from '@assets/icons/home.svg';
import SettingsIcon from '@assets/icons/settings.svg';
import ShoppingIcon from '@assets/icons/shopping.svg';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '@screens/Home/Home';
import {Shopping} from '@screens/Shopping/Shopping';
import {Settings} from '@screens/Settings/Settings';

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
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <HomeIcon width={30} height={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Shopping"
        component={Shopping}
        options={{
          tabBarIcon: ({color}) => (
            <ShoppingIcon width={30} height={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <SettingsIcon width={30} height={30} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
