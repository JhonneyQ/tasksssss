import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import ClientLayout from './components/client';
import Homee from './pages/user/Home';
import About from './pages/user/About';
import Product from './pages/user/Product';
import Blog from './pages/user/Blog';
import Contact from './pages/user/Contact';
import Details from './pages/user/details';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

//client
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Homee />} />
          <Route path="/about" element={<About/>} />
          <Route path="/products">
            <Route index element={<Product/>}/>
            <Route path=':id' element={<Details/>}/>
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

//admin
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} />
        </Route> */}
      </Routes>
    </>
  )
}

export default App
