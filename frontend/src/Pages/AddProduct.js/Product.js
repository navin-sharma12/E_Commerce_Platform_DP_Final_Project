import React from "react";
import axios from "axios";
import ProductList from "./ProductList";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/v1/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
};

//const Product = () => {
//  const products = [
//    {
//      name: "Product 1",
//      image: "product1.jpg",
//      description: "Description of product 1",
//      price: 10.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//    {
//      name: "Product 2",
//      image: "product2.jpg",
//      description: "Description of product 2",
//      price: 19.99,
//    },
//  ];
//  return (
//    <div className="App">
//      <h1>Product Catalog</h1>
//      <ProductList products={products} />
//    </div>
//  );
//};

export default Product;
