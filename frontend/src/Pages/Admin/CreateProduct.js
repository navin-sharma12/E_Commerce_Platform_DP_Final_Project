import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to indicate submission success
  const [isSubmitting, setIsSubmitting] = useState(false); // State to show loading status

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const productData = {
      name,
      price: parseFloat(price),
      stockQuantity: parseInt(quantity, 10)
    };

    console.log('Submitting product:', productData);
    setIsSubmitting(true); // Show loading status

    // Use Fetch API to send data to your API endpoint
    fetch('http://localhost:8080/v1/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setIsSubmitting(false); // Hide loading status
      setSubmitted(true); // Indicate submission success
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsSubmitting(false); // Hide loading status
    });

    // Reset form fields
    setName('');
    setPrice('');
    setQuantity('');
  };

  if (submitted) {
    return (
      <div>
        <h1>Product Added Successfully!</h1>
        <Link to="/admin"><button>Return to Admin Dashboard</button></Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} min="0" />
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} min="0" />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
