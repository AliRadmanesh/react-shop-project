import React, { Component } from "react";

import Header from "../../components/layout/header";
import NavBar from "../../components/common/nav-bar";
import Footer from "../../components/layout/footer";
import ProductsList from "../../components/common/products-list";
import Cart from "../../components/common/cart";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addedToCartList: [],
    };
  }

  handleOnProductSelected = (productItem) => {
    const { addedToCartList } = this.state;

    if (!addedToCartList.includes(productItem)) {
      this.setState((prevState) => {
        return {
          addedToCartList: [...prevState.addedToCartList, productItem],
        };
      });
    }
  };

  handleRemoveProduct = (productItem) => {
    const { addedToCartList } = this.state;

    const filteredCartItems = addedToCartList.filter((cartItem) => {
      return cartItem.id !== productItem.id;
    });
    this.setState({ addedToCartList: filteredCartItems });
  };

  render() {
    const { addedToCartList } = this.state;

    return (
      <div className="main-layout">
        <Header>
          <NavBar />
        </Header>
        <Cart list={addedToCartList} onItemRemove={this.handleRemoveProduct} />
        <ProductsList onProductSelected={this.handleOnProductSelected} />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
