import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./routes";
import AuthRoute from "./auth-route";

class RouteHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: true,
    };
  }

  render() {
    const { isAuthenticated } = this.state;

    return (
      <Switch>
        {routes.map((routeItem) => {
          const { name, path, exact, needAuth, component } = routeItem;

          if (needAuth) {
            return (
              <AuthRoute
                key={name}
                path={path}
                exact={exact}
                component={component}
                isAuthenticated={isAuthenticated}
              />
            );
          }

          return (
            <Route key={name} path={path} exact={exact} component={component} />
          );
        })}
      </Switch>
    );
  }
}

export default RouteHandler;
