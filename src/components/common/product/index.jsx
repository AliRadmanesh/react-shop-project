import React, { Component } from "react";

import "components/base/button/style.css";
import styles from "./style.module.css";

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <div className={styles.productItem}>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productPrice}>{product.price}</div>
        <button className="button-global" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Product;
