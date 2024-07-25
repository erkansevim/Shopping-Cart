import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const NewProduct = () => {

  return (
  <div className="">
  <div className="container">
  <form action="">
  <div class="form-group">
    <label for="exampleFormControlInput1">Product Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Product Price</label>
    <input type="number" class="form-control" id="exampleFormControlInput1"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Product Quantity</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="form-group">
  <label for="basic-url" class="form-label">Your vanity URL</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">https://example.com/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
  </div>
  </div>

    <button type="submit" className="btn btn-success">
        <i className="bi bi-cart-plus fs-4 me-3"></i>
        Save To New Product
    </button>
    </form>
  </div>
  </div>
  )
};

export default NewProduct;