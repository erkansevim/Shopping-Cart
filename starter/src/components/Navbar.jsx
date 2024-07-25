import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Shopping List</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/newProduct" class="nav-link" href="#">New Product</Link>
          </li>
          <li class="nav-item">
            <Link to="/productList" class="nav-link" href="#">Product List</Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link" href="#">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar