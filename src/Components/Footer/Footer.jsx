import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagram_logo from "../Assets/instagram logo.png";
import facebook_logo from "../Assets/facebook logo.png";
import whatsapp_logo from "../Assets/whatsapp logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="social_icons">
        <div className="icon_container">
          <img src={instagram_logo} alt="" />
        </div>
        <div className="icon_container">
          <img src={facebook_logo} alt="" />
        </div>
        <div className="icon_container">
          <img src={whatsapp_logo} alt="" />
        </div>
        </div>
        <div className="copyright">
          <hr />
          <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
      
    </div>
  );
};

export default Footer;
