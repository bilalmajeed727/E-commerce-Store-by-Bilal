import React from "react";
import arrow_icon from "../Assets/breadcrum arrow icon.png";
import "./BreadCrum.css";
import { useParams } from "react-router-dom";

const BreadCrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" className="arrow" />
      SHOP <img src={arrow_icon} alt="" className="arrow" />
      {product.category}<img src={arrow_icon} alt="" className="arrow" />
      {product.name}<img src={arrow_icon} alt="" className="arrow" />
    </div>
  );
};

export default BreadCrum;
