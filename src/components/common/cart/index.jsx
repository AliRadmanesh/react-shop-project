import React, { Component } from "react";

import "./style.css";

class Cart extends Component {
  render() {
    return (
      <div className="product-in-cart">
        <p>Product Name</p>
        <p>Product price</p>
        <p>Sale</p>
      </div>
    );
  }
}

export default Cart;
