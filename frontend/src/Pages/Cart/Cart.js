import React, { useState } from "react";
import CartLayout from "./CartLayout";
import "./cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      name: "Product 1",
      image: "product1.jpg",
      price: 10.99,
      quantity: 2,
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      price: 19.99,
      quantity: 1,
    },
    // Add more items as needed
  ]);

  const handleRemoveFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item !== itemToRemove);
    setCartItems(updatedCartItems);
  };
  return (
    <div>
      <CartLayout items={cartItems} onRemove={handleRemoveFromCart} />
    </div>
  );
};

export default Cart;
