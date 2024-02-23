import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
  const { all_data } = useContext(ShopContext);
  const { addToCart } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_data.find((item) => {
    return item.id === Number(productId);
  });

  return (
    <div>
      
      <BreadCrum product={product} />
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
    </div>
  );
};

export default Product;
