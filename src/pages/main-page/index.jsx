import React, { Component } from "react";

import Cart from "../../components/common/cart";
import Header from "../../components/layout/header";
import NavBar from "../../components/common/nav-bar";
import ProductsList from "../../components/common/products-list";

import styles from "./style.module.css";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addedToCartList: [],
      showCart: false,
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

  handleCartClick = () => {
    this.setState((prevState) => {
      return {
        showCart: !prevState.showCart,
      };
    });
  };

  render() {
    const { addedToCartList, showCart } = this.state;

    return (
      <div className={styles.mainLayout}>
        <Header>
          <NavBar
            onCartClick={this.handleCartClick}
            NumberOfCartItems={addedToCartList.length}
          />
        </Header>
        <Cart
          isCartVisible={showCart}
          list={addedToCartList}
          onItemRemove={this.handleRemoveProduct}
        />
        <div className={styles.productContainer}>
          <ProductsList onProductSelected={this.handleOnProductSelected} />
        </div>
      </div>
    );
  }
}

export default MainPage;
