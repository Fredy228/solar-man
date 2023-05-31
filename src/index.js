import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactPixel from 'react-facebook-pixel';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { theme } from 'components/theme';
import './index.css';

const options = {
  autoConfig: true,
  debug: false,
};

if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
} else {
  ReactPixel.init('727645149364780', null, options);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
