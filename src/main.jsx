import React from 'react';
import { createRoot } from 'react-dom/client';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <GlobalStyles />
      <App />
    </CacheProvider>
  </React.StrictMode>
);
