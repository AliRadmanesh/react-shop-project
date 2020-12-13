import React, { Component } from "react";

import styles from "./style.module.css";

class NavBarItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return <div className={styles.text}>{title}</div>;
  }
}

export default NavBarItem;
