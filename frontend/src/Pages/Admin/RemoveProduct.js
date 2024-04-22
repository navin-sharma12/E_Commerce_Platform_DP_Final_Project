import React, { useState, useEffect } from 'react';

function RemoveProduct() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch('http://localhost:8080/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (product) => {
    if (selectedProducts.includes(product.id)) {
      setSelectedProducts(selectedProducts.filter(id => id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product.id]);
    }
  };

  // Delete selected products
  const deleteSelectedProducts = () => {
    selectedProducts.forEach(id => {
      fetch(`http://localhost:8080/v1/products/${id}`, {
        method: 'DELETE'
      })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
        setSelectedProducts(selectedProducts.filter(selectedId => selectedId !== id));
      })
      .catch(error => console.error('Error deleting product:', error));
    });
  };

  return (
    <div>
      <h1>Remove Products</h1>
      <button onClick={deleteSelectedProducts}>Delete Selected Products</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <input
              type="checkbox"
              checked={selectedProducts.includes(product.id)}
              onChange={() => handleCheckboxChange(product)}
            />
            {product.name} - ${product.price} - Qty: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RemoveProduct;
