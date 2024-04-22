import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Checkout = () => {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const {
    "Invoice Date": invoiceDate,
    "Order ID": orderId,
    Items: items,
  } = checkoutItems;
  const fetchCheckout = async () => {
    console.log("Checkout:Fetch");
    try {
      const response = await fetch("http://localhost:8080/v1/checkout");
      const data = await response.json();
      console.log("checkout data -  ", data);
      setCheckoutItems(data);
    } catch (error) {
      console.error("Error displaying checkout:", error);
    }
  };
  console.log("checkout -  ", checkoutItems);

  useEffect(() => {
    console.log("Checkout:UseEffect");
    fetchCheckout();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "orange",
        marging: "20px",
        marginTop: "80px",
        marginLeft: "25%",
        padding: "20px",
        height: "400px",
        width: "500px",
      }}
    >
      <h1>Checkout Page</h1>
      <form>
        <div>
          <label>Invoice Date:</label>
          <input type="text" value={invoiceDate} readOnly />
        </div>
        <div>
          <label>Order ID:</label>
          <input type="text" value={orderId} readOnly />
        </div>
        <div>
          <label>Items:</label>
          {items &&
            items.map((item, index) => (
              <div key={index}>
                <label>Product Name:</label>
                <input type="text" value={item["Product Name"]} readOnly />
                <label>Price:</label>
                <input type="text" value={item.Price} readOnly />
                <label>Quantity:</label>
                <input type="text" value={item.Quantity} readOnly />
              </div>
            ))}
        </div>
      </form>
      <Link to="/shopping">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default Checkout;
