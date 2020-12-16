import React, { Component } from "react";

import { getMockProducts } from "../../../server.js";

import styles from "./style.module.css";

class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsList: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getDataFromMockApi();
  }

  getDataFromMockApi = async () => {
    const response = await getMockProducts();

    this.setState({
      productsList: response,
      isLoading: false,
    });
  };

  addToCart = (product) => {
    const { onProductSelected } = this.props;
    onProductSelected(product);
  };

  renderProducts = () => {
    const { productsList, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className={styles.listWrapper}>
        <div>
          {productsList.map((product) => {
            return (
              <div className={styles.productItem} key={product.id}>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <button onClick={() => this.addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  render() {
    return <>{this.renderProducts()}</>;
  }
}

export default ProductsList;
