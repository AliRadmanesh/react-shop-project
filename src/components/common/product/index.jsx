import React, { Component } from "react";

import styles from "./style.module.css";

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <div className={styles.productItem}>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;
