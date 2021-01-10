import React, { Component } from "react";
import { Link } from "react-router-dom";

import { paths } from "routes/paths";
import styles from "./style.module.css";
import "components/base/button/style.css";

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <div className={styles.productItem}>
        <Link to={`/product-item/${product.id}`}>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.productPrice}>{product.price}</div>
        </Link>
        <button className="button-global" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Product;
