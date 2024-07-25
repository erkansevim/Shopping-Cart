import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Main = () => {
  return (
    <main className="main">
      <div>
        <h1>Welcome to Shopping Cart Application</h1>
        <div className="main-buttons">
          <Link to="/newProduct">
          <button className="btn btn-outline-primary px-4">
          Add New Product
          </button>
          </Link>
            
          <Link to="/productList">
          <button className="btn btn-primary px-4 ms-3">See Products</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;