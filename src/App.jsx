import "./App.css";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/cart";
import ProductCategory from "./Pages/ProductCategory";
import Product from "./Pages/Product";
import Login from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/mens shopping banner.jpg";
import women_banner from "./Components/Assets/ladies shopping banner.jpg";
import kids_banner from "./Components/Assets/kids shopping banner.jpg";

function App() {

 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/men"
            element={<ProductCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ProductCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ProductCategory banner={kids_banner} category="Kids" />}
          />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
