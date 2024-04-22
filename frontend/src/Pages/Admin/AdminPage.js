import React from 'react';
import { Link } from 'react-router-dom';

function AdminPage() {

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <Link to="/create-product"><button>Create Product</button></Link>
      <Link to="/remove-product"><button>Remove Product</button></Link>
<<<<<<< HEAD
      <Link to="/orders"><button>View Orders</button></Link>
=======
>>>>>>> e5d8144312a3b0cfdc34e8aae50c5ca97687fc34
    </div>
  );
}

export default AdminPage;
