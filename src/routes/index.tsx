import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

// SCREENS
import {AppRoutes} from './app.routes';
import {AuthRoutes} from './auth.routes';

// HOOKS
import {useAuth} from '@hooks/useAuth';

export function Routes() {
  const {user} = useAuth();
  console.log('use', user);
  return (
    <NavigationContainer>
      {/* {user.id ? <AppRoutes /> : <AuthRoutes />} */}
      <AuthRoutes />
    </NavigationContainer>
  );
}
