import React from "react";
import axios from "axios";
import "./product.css";

const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
      try {
        await axios.post("http://localhost:8080/v1/cart/add", product);
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    };
  return (
    <div>
      <div className="card">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
