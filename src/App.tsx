import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/routes/AppRoutes.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, useMediaQuery } from '@mui/material';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
