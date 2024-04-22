import React from "react";
import "./cart.css";
import displayToast from "../../utils/displayToast";

const CartItem = ({ item, fetchCartItems }) => {
  console.log("item ", item);
  const onRemove = async () => {
    console.log("item in", item);
    // console.log("itemToRemove " + item);
    fetch("http://localhost:8080/v1/cart/remove", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: item.id,
        product: {
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          stockQuantity: item.product.stockQuantity,
          imgUrl: item.product.imgUrl,
        },
        quantity: item.quantity,
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
  };

  return (
    <div className="cart-item">
      {/* <img src={item.product.img} alt={item.name} /> */}
      <div>
        <h3>{item.product.name}</h3>
        <p>Price: ${item.product.price}</p>
        <p>Quantity: {item.product.stockQuantity}</p>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
