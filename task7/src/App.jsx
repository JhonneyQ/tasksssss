import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/home";
import Products from "./pages/user/products";
import Contacts from "./pages/user/contacts";
import Header from "./layouts/user/header";
import Footer from "./layouts/user/footer";
import ClientLayout from "./components/client/ClientLayout";
import AdminLayout from "./components/admin/AdminLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./pages/admin/add";
import Dashboard from "./pages/admin/dashboard";
import Edit from "./pages/admin/edit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>

        //client
        <Route path="/" element={<ClientLayout/>}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
        </Route>

        //admin
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<Add/>} />
          <Route path="edit" element={<Edit />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
