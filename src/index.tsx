import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { colors, global as GlobalStyle, radius, spacings } from './theme';

import App from './App';

const theme = { ...colors, ...radius, ...spacings };

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root'),
);
