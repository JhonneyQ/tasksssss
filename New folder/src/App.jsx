import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Client from './components/client'
import Products from './pages/products'
import Favorites from './pages/favorites'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Client/>}>
          <Route index element={<Home/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='Favorites' element={<Favorites/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
