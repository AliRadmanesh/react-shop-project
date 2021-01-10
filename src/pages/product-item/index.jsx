import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ProductItemPage extends Component {
  render() {
    const { productId } = this.props.match.params;

    return <div>Product Id #{productId}</div>;
  }
}

export default withRouter(ProductItemPage);
