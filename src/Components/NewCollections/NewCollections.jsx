import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/NewCollection";
import Item from "../Item/Item.jsx";
const NewCollections = () => {
  return (
    <div className="new_collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="new_collections_item">
        {new_collection.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default NewCollections;
