import { useState } from 'react'
import './App.css'
import Client from './components/client'
import Contact from './pages/client/contact'
import Favorites from './pages/client/favorites'
import Home from './pages/client/home'
import Products from './pages/client/products'
import { Route, Routes } from "react-router-dom";
import Admin from './components/admin'
import Adminn from './components/admin'
import Dashboard from './pages/admin/dashboard'
import Ad from './pages/admin/mian'
import Details from './pages/client/details/inedex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Products"  >
            <Route index element={<Products />}/>
            <Route path=':id' element={<Details/>}/>
          </Route>
          <Route path="Favorite" element={<Favorites />} />
        </Route>
        <Route path="/admin" element={<Adminn />}>
          <Route index element={<Ad/>} />
          <Route path="dashboard" element={<Dashboard />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
