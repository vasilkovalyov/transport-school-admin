import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/scss/main.scss';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
