import React, { Component } from "react";

import styles from "./style.module.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return <div className={styles.container}>{children}</div>;
  }
}

export default Header;
