import React, { Component } from "react";

import Header from "../../components/layout/header";
import NavBar from "../../components/common/nav-bar";
import Footer from "../../components/layout/footer";
import ProductsList from "../../components/common/products-list";
import Cart from "../../components/common/cart";

class MainPage extends Component {
  render() {
    return (
      <div className="main-layout">
        <Header>
          <NavBar />
        </Header>
        <Cart />
        <ProductsList />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
