import React, { useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./cart.css";

function CartLayout({ items, fetchCartItems }) {
  const total = items.reduce(
    // (acc, item) => acc + item.price * item.quantity,
    (acc, item) => acc + item.product.price*item.product.stockQuantity,
    0
  );

  return (
    <>
      <h3>Shopping Cart</h3>
      <div className="cart">
        {items.map((item, index) => (
          <CartItem key={index} item={item} fetchCartItems={fetchCartItems} />
        ))}
      </div>
      <h3>Total: ${total.toFixed(2)}</h3>
      <Link to="/Checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </>

  );
}

export default CartLayout;
