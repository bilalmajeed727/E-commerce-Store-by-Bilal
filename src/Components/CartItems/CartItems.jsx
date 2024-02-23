import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { FaTrash } from "react-icons/fa";

const CartItems = () => {
  const {getTotalAmount, cartItems, all_data, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="carthead">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        <hr />
      </div>
      <div className="addedItems">
        {all_data.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div className="cartIndividual carthead">
                <img src={item.image} className="product_image" alt="" />
                <p>{item.name}</p>
                <p>{item.new_price}</p>
                <button>{cartItems[item.id]}</button>
                <p>${item.new_price * cartItems[item.id]}</p>
                <FaTrash
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                  className="delete_icon"
                />
                <hr />
              </div>
            );
          }
          return null;
        })}

        <div className="cartItems_down">
          <div className="cart_total">
            <h1>Cart Total</h1>
            <div>
              <div className="cart_total_item">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart_total_item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cart_total_item">
                <h3>Total</h3>
                <h3>${getTotalAmount()}</h3>
              </div>
              <button className="checkout_button">PROCEED TO CHECKOUT</button>
            </div>
          </div>
          <div className="promocode">
            <p>If you have any promo code, Enter here</p>
            <div className="promoBox">
            <input type="text" placeholder="Enter Promocode" />
            <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
