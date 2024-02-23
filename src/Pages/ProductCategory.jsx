import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ProductCategory.css";
import drop_down_icon from "../Components/Assets/drop down icon.png";

const ProductCategory = (props) => {
  const { all_data } = useContext(ShopContext);

  return (
    <div className="product_category">
      <img src={props.banner} alt="" className="banner" />

      <div className="sorting">
        <div className="indexsort">
          <p>
            <span>Showing 1-10 </span> from 30 products.
          </p>
        </div>
        <div className="sortImg">
          sort by <img src={drop_down_icon} alt="" />
        </div>
      </div>

      <div className="all_data">
        {all_data.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                item_name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
