import React, { useState, useEffect } from "react";

const Checkout = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceDate: "",
    orderId: "",
    items: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/v1/checkout");
      const textResponse = await response.text();
      console.log(textResponse);
      const parsedData = parseInvoiceData(textResponse);
      //setInvoiceData(parsedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const parseInvoiceData = (textData) => {
    console.log("textData", textData);
    const lines = textData.split("\n");
    console.log("lines", lines);
    const invoiceDate = lines[0].split(": ")[1];
    console.log("invoiceDate", invoiceDate);
    const orderId = lines[1].split(": ")[1];
    const items = lines.slice(3).map((line) => {
      const itemData = line.split(" - ");
      const itemName = itemData[0];
      const quantityPrice = itemData[1].split(", ");
      const quantity = quantityPrice[0].split(": ")[1];
      const price = quantityPrice[1].split(": ")[1];
      return { itemName, quantity, price };
    });
    return { invoiceDate, orderId, items };
  };

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
      <div>
        {/* <p>{invoiceData}</p> */}
        {/* <h1>Invoice Data Form</h1>
        <form>
          <div>
            <label>Invoice Date:</label>
            <input type="text" value={invoiceData.invoiceDate} readOnly />
          </div>
          <div>
            <label>Order ID:</label>
            <input type="text" value={invoiceData.orderId} readOnly />
          </div>
          <div>
            <label>Items:</label>
            {invoiceData.items.map((item, index) => (
              <div key={index} className="item">
                <p>{item.itemName}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
              </div>
            ))}
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Checkout;
