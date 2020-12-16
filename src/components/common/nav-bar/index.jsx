import React, { Component } from "react";

import NavBarItem from "../nav-bar-item";

import styles from "./style.module.css";

class NavBar extends Component {
  render() {
    const { onCartClick, NumberOfCartItems } = this.props;

    return (
      <div className={styles.container}>
        <NavBarItem>Home</NavBarItem>
        <NavBarItem
          onClick={onCartClick}
        >{`Cart (${NumberOfCartItems})`}</NavBarItem>
        <NavBarItem>Profile</NavBarItem>
      </div>
    );
  }
}

export default NavBar;
