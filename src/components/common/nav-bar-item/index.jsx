import React, { Component } from "react";

import styles from "./style.module.css";

class NavBarItem extends Component {
  render() {
    const { children, onClick } = this.props;

    return (
      <div className={styles.text} onClick={onClick}>
        {children}
      </div>
    );
  }
}

export default NavBarItem;
