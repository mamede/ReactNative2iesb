import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

// SCREENS
import {AuthRoutes} from './auth.routes';
// import {AppRoutes} from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      {/* {user.id ? <AppRoutes /> : <AuthRoutes />} */}
      <AuthRoutes />
    </NavigationContainer>
  );
}
