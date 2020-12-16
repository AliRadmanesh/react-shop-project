import React, { Component } from "react";

import "./style.css";

class Cart extends Component {
  render() {
    const { list, onItemRemove } = this.props;

    return list.map((productItem) => {
      return (
        <div className="product-in-cart" key={productItem.id}>
          <p>{productItem.name}</p>
          <p>{productItem.price}</p>
          {productItem.hasOff && <p>Sale</p>}
          <button onClick={() => onItemRemove(productItem)}>Delete</button>
        </div>
      );
    });
  }
}

export default Cart;
