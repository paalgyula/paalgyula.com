import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import FirebaseProvider from './FirebaseProvider';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FirebaseProvider>
        <CssBaseline />
        <App />
      </FirebaseProvider>
    </ThemeProvider>
  </React.StrictMode>
);
