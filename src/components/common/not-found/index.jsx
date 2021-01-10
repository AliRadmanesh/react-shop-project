import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { paths } from "routes/paths";

class NotFound extends Component {
  render() {
    return <Redirect to={paths.ERROR_404} />;
  }
}

export default NotFound;
