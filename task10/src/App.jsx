import { useState } from 'react'
import './App.css'
import Client from './components/client/insex'
import Favorite from './pages/favorite'
import Home from './pages/home'
import Products from './pages/products'
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/products" element={<Products/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
