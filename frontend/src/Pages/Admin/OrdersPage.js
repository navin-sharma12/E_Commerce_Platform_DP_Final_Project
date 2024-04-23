import React, { useState, useEffect } from 'react';
import "./ordersPage.css"

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/v1/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const updateStatus = (orderId, type) => {
    fetch(`http://localhost:8080/v1/orders/${type}/${orderId}`, {
      method: 'POST'
    })
    .then(response => response.json())
    .then(updatedOrder => {
      const newOrders = orders.map(order => order.id === orderId ? updatedOrder : order);
      setOrders(newOrders);
    })
    .catch(error => console.error(`Error updating order ${orderId}:`, error));
  };

  return (
    <div>
      <h1>Orders Management</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {orders.map(order => (
          <div key={order.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <p>Order ID: {order.id}</p>
            <p>Status: {order.stateType}</p>
            <button onClick={() => updateStatus(order.id, 'next')}>Next State</button>
            <button onClick={() => updateStatus(order.id, 'prev')}>Previous State</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
