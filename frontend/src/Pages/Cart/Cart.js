import React, { useState,useEffect } from "react";
import CartLayout from "./CartLayout";
import axios from "axios";
import "./cart.css";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/v1/cart");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleRemoveFromCart = async (itemToRemove) => {
    try {
      await axios.delete("http://localhost:8080/v1/cart/remove", { data: itemToRemove });
      fetchCartItems();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div>
      <CartLayout items={cartItems} onRemove={handleRemoveFromCart} />
    </div>
  );
};

//const Cart = () => {
//  const [cartItems, setCartItems] = useState([
//    {
//      name: "Product 1",
//      image: "product1.jpg",
//      price: 10.99,
//      quantity: 3,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      price: 18.99,
//      quantity: 1,
//    },
//    // Add more items as needed
//  ]);
//
//  const handleRemoveFromCart = (itemToRemove) => {
//    const updatedCartItems = cartItems.filter((item) => item !== itemToRemove);
//    setCartItems(updatedCartItems);
//  };
//  return (
//    <div>
//      <CartLayout items={cartItems} onRemove={handleRemoveFromCart} />
//    </div>
//  );
//};

export default Cart;
