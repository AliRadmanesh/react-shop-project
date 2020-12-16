import React, { Component } from "react";

import Product from "../product";
import { getMockProducts } from "../../../server.js";
import Loading from "../../base/loading";

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
      return (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      );
    }
    return (
      <div className={styles.listWrapper}>
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
    );
  };

  render() {
    return <>{this.renderProducts()}</>;
  }
}

export default ProductsList;
