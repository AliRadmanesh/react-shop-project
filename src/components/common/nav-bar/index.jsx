import React, { Component } from "react";
import { Link } from "react-router-dom";

import { paths } from "routes/paths";
import NavBarItem from "../nav-bar-item";

import styles from "./style.module.css";

class NavBar extends Component {
  render() {
    const { onCartClick, NumberOfCartItems } = this.props;

    return (
      <div className={styles.container}>
        <Link to={paths.HOME}>
          <NavBarItem>Home</NavBarItem>
        </Link>
        <NavBarItem
          onClick={onCartClick}
        >{`Cart (${NumberOfCartItems})`}</NavBarItem>
        <Link to={paths.PROFILE}>
          <NavBarItem>Profile</NavBarItem>
        </Link>
      </div>
    );
  }
}

export default NavBar;
