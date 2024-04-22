import React, { useState } from "react";

const Checkout = () => {
    const [checkoutItems, setCheckoutItems] = useState([]);

    const fetchCheckout = async () => {
        try {
          const response = await fetch("http://localhost:8080/v1/checkout");
          const data = await response.json();
          console.log("checkout -  ", data);
          setCheckoutItems(data);
        } catch (error) {
          console.error("Error displaying checkout:", error);
        }
      };

    useEffect(() => {
        fetchCheckout();
      }, []);

  return (
    <div className="checkout-page">
      <h1>Checkout Page</h1>
       <div>
           <p>{checkoutItems}</p>
        </div>
    </div>
  );
}

export default Checkout;