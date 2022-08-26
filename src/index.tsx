import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from './styles/theme';
import App from './App';

import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
