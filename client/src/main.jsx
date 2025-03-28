import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
