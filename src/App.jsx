import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Product from "./pages/Product";

function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<User/>}/>
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
    </>
  )
}

export default App
