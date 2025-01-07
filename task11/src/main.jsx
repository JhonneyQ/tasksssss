import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import FavoritesProvider from './context';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BasketProvider from './context/index2';

createRoot(document.getElementById('root')).render(

  <HelmetProvider>
    <BrowserRouter>
      <BasketProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </BasketProvider>
    </BrowserRouter>
  </HelmetProvider>
)
