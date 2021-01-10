import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { getProductById } from "server";
import Loading from "components/base/loading";

class ProductItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    const { productId } = this.props.match.params;
    this.getProductData(productId);
  }

  getProductData = async (productId) => {
    try {
      const data = await getProductById(productId);
      this.setState({ data });
    } catch (e) {
      alert("Product NOT Found :(");
    } finally {
      this.setState({ isLoading: false });
    }
  };

  renderProduct = () => {
    const { isLoading, data } = this.state;

    if (isLoading) {
      return <Loading />;
    }
    return (
      <>
        <p>Id: {data.id}</p>
        <p>Name: {data.name}</p>
        <p>Price: {data.price}</p>
        {data.hasOff && <p>Sale!</p>}
      </>
    );
  };

  render() {
    return <div className="product-wrapper">{this.renderProduct()}</div>;
  }
}

export default withRouter(ProductItemPage);
