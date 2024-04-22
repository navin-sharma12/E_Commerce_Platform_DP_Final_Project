import React, { useState, useEffect } from "react";
import CartLayout from "./CartLayout";
import axios from "axios";
import "./cart.css";
import displayToast from "../../utils/displayToast";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:8080/v1/cart");
      const data = await response.json();
      console.log("cartData ", data);
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleRemoveFromCart = async (itemToRemove) => {
    console.log("itemToRemove " + itemToRemove);

    const updatedCartItems = cartItems.filter((item) => item !== itemToRemove);
    // setCartItems(updatedCartItems);
    console.log("updatedCartItems ", updatedCartItems[0]);

    fetch("http://localhost:8080/v1/cart/remove", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: 1,
        product: {
          id: updatedCartItems[0].product.id,
          name: updatedCartItems[0].product.name,
          price: updatedCartItems[0].product.price,
          stockQuantity: updatedCartItems[0].product.stockQuantity,
          imgUrl: updatedCartItems[0].product.imgUrl,
        },
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          fetchCartItems();
          displayToast({
            type: "success",
            msg: "Product removed successfully from  the cart!",
          });
        }
      })
      .catch((err) => {
        displayToast({ type: "error", msg: "Product was not removed." });
        console.log(err);
      });

    // try {
    //   await fetch("http://localhost:8080/v1/cart/remove/", {
    //     method: "DELETE",
    //   });
    //   fetchCartItems();
    // } catch (error) {
    //   console.error("Error removing item:", error);
    // }
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
