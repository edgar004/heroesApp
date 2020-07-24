import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DasboardRoutes } from "./DasboardRoutes";
// Sistema de rutas principal
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DasboardRoutes} />
          {/* Sistema de rutas hijas */}
        </Switch>
      </div>
    </Router>
  );
};
