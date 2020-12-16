import React, { Component } from "react";

import Product from "../product";
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

  renderProducts = () => {
    const { productsList, isLoading } = this.state;
    const { onProductSelected } = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className={styles.listWrapper}>
        <div>
          {productsList.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                addToCart={() => onProductSelected(product)}
              />
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
