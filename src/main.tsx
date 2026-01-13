import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Provider from './provider.tsx';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>,
);
