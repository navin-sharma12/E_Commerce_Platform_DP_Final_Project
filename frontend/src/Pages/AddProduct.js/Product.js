import React from "react";
import ProductList from "./ProductList";

const Product = () => {
  const products = [
    {
      name: "Product 1",
      image: "product1.jpg",
      description: "Description of product 1",
      price: 10.99,
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      description: "Description of product 2",
      price: 19.99,
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      description: "Description of product 2",
      price: 19.99,
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      description: "Description of product 2",
      price: 19.99,
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      description: "Description of product 2",
      price: 19.99,
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      description: "Description of product 2",
      price: 19.99,
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      description: "Description of product 2",
      price: 19.99,
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      description: "Description of product 2",
      price: 19.99,
    },
    {
      name: "Product 2",
      image: "product2.jpg",
      description: "Description of product 2",
      price: 19.99,
    },
  ];
  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Product;
