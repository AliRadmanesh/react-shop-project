import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

export default Header;
