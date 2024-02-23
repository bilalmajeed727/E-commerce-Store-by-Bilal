import React from "react";
import PRODUCT_DATA from "../Assets/Data.js";
import Item from "../Item/Item.jsx";
import './Popular.css'

const Popular = () => {
  return (
    <div className="popular">
      <h3>POPULAR IN MEN</h3>
      <hr />
      <div className="popular_item" >
        {PRODUCT_DATA.map((item,i) => {
          return (
            <Item
              key={i}
              id={item.id}
              item_name={item.name}
              image={item.image}
              new_price={item.price_new}
              old_price={item.price_old}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
