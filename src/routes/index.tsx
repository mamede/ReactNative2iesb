import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

// SCREENS
import {AppRoutes} from './app.routes';
import {AuthRoutes} from './auth.routes';

export function Routes() {
  return (
    <NavigationContainer>
      {/* {user.id ? <AppRoutes /> : <AuthRoutes />} */}
      <AppRoutes />
    </NavigationContainer>
  );
}
