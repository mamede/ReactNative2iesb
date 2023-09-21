import React from 'react';
import {StatusBar} from 'react-native';

// ROUTES
import {Routes} from '@routes/index';

// SERVICES
import {QueryClientProvider} from 'react-query';
import {queryClient} from '@services/queryClient';

// CONTEXTS
import {AuthContextProvider} from '@contexts/AuthContext';

// STYLES
import {ThemeProvider} from 'styled-components/native';
import theme from '@styles/theme';

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
