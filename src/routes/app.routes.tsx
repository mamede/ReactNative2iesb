import {Platform} from 'react-native';

// ASSETS
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Welcome} from '@screens/Welcome/Welcome';

const {Navigator, Screen} = createBottomTabNavigator();

const TabBarIcon = (props: any) => {
  const {focused, name, color, size} = props;

  let iconName;

  if (name === 'Welcome') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (name === 'Compras') {
    iconName = focused ? 'list' : 'list-outline';
  } else {
    iconName = focused ? 'settings' : 'settings-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#319204',
        tabBarInactiveTintColor: '#d2d2d2',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
        },
        tabBarIcon: props => <TabBarIcon {...props} name={route.name} />,
      })}>
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" size={30} color={color} />
          ),
        }}
      />
      <Screen name="Compras" component={Welcome} />
      <Screen name="Ajustes" component={Welcome} />
    </Navigator>
  );
}
