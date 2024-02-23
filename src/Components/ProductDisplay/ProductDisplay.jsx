import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_icon_dull from "../Assets/star_icon_dull.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)


  return (
    <div className="productdisplay">
      <div className="productsiaplay_left">
        <div className="image_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="main_image">
          <img src={product.image} alt="" className="main_product_image" />
        </div>
      </div>

      <div className="productdisplay_right">
        <h1>{product.name}</h1>
        <div className="productdisplay_right_stars">
          <img src={star_icon} alt="" className="star_icon" />
          <img src={star_icon} alt="" className="star_icon" />
          <img src={star_icon} alt="" className="star_icon" />
          <img src={star_icon} alt="" className="star_icon" />
          <img src={star_icon_dull} alt="" className="star_icon" />
          <p>(122)</p>
        </div>
        <div className="productdisplay_right_prices">
            <div className="productdisplay_right_oldprice">${product.old_price}</div>
            <div className="productdisplay_right_newprice">${product.new_price}</div>
        </div>

        <p className="productdisplay_description">
          We got the best fashion for you at our online store.Enjoy Shopping.
        </p>
        <div className="productdisplay_right_size">
            <h1>Select Size</h1>
            <div className="productdisplay_right_sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>addToCart(product.id)} >Add to cart</button>
        <p className="productdisplay_right_category"><span>Category :</span> Women , Dresses</p>
        <p className="productdisplay_right_category"><span>Tags :</span> Modren , Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
