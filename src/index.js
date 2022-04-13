import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './template/home/index';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);