import React from "react";
import "./cart.css";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => onRemove(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
