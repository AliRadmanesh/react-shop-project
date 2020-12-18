import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import { paths } from "./paths";

class AuthRoute extends Component {
  render() {
    const { path, exact, component, isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Route path={path} component={component} exact={exact} />;
    }

    return <Redirect to={paths.NOT_AUTHENTICATED} />;
  }
}

export default AuthRoute;
