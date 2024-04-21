import React from "react";
import "./product.css";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="card">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
