import React from "react";
import "./cart.css";

const CartItem = ({ item, onRemove }) => {
  console.log("item ", item);
  return (
    <div className="cart-item">
      {/* <img src={item.product.img} alt={item.name} /> */}
      <div>
        <h3>{item.product.name}</h3>
        <p>Price: ${item.product.price}</p>
        <p>Quantity: {item.product.stockQuantity}</p>
        <button onClick={() => onRemove(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
