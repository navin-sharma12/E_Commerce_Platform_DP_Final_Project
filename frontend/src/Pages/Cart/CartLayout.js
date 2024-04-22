import React, { useState } from "react";
import CartItem from "./CartItem";
import "./cart.css";

function CartLayout({ items, onRemove }) {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.map((item, index) => (
        <CartItem key={index} item={item} onRemove={onRemove} />
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <Link to="/Checkout">
          <button>Proceed to Checkout</button>
      </Link>

    </div>
  );
}

export default CartLayout;
