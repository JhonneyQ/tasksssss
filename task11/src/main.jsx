import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import FavoritesProvider from './context';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </BrowserRouter>
)
