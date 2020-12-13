import React, { Component } from "react";

import NavBarItem from "../nav-bar-item";

import styles from "./style.module.css";

class NavBar extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <NavBarItem title="Home" />
        <NavBarItem title="Cart" />
        <NavBarItem title="Profile" />
      </div>
    );
  }
}

export default NavBar;
