import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import drop_down from '../Assets/nav dropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const {cartCounter} = useContext(ShopContext)
  const menuRef = useRef()

 const dropdown_toggle =(e)=>{
  menuRef.current.classList.toggle('nav-manu-visible')
  e.target.classList.toggle('open')
 }

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <img onClick={dropdown_toggle} className='dropdown-icon'src={drop_down} alt="" />
        <ul ref={menuRef} className="nav-manu">
          <li onClick={() => setMenu("shop")}>
            <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
              Shop
            </Link>
            {menu == "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("men")}>
            <Link
              style={{ textDecoration: "none", color: "#626262" }}
              to="/men"
            >
              Men
            </Link>
            {menu == "men" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("women")}>
            <Link
              style={{ textDecoration: "none", color: "#626262" }}
              to="/women"
            >
              Women
            </Link>
            {menu == "women" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link
              style={{ textDecoration: "none", color: "#626262" }}
              to="/kids"
            >
              Kids
            </Link>
            {menu == "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cartIcon} alt="cart icon" className="cart-icon" />
          </Link>
          <div className="cart-count">{cartCounter()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
