import React, { Component } from "react";

import "./style.css";

class Cart extends Component {
  renderCart = () => {
    const { isCartVisible, list, onItemRemove } = this.props;

    if (isCartVisible) {
      if (!list.length) {
        return (
          <div className="cart-empty-container">
            <p>There is no product in your cart :(</p>
          </div>
        );
      }

      return (
        <div className="cart-container">
          {list.map((productItem) => {
            return (
              <div className="product-in-cart" key={productItem.id}>
                <p>{productItem.name}</p>
                <p>{productItem.price}</p>
                {productItem.hasOff && <p>Sale</p>}
                <button onClick={() => onItemRemove(productItem)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      );
    }

    return null;
  };

  render() {
    return <>{this.renderCart()}</>;
  }
}

export default Cart;
