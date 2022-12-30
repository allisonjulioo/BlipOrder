import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./../pages/Main";
import Profile from "./../pages/Profile";
import Form from "./../pages/Form";

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/bot/new" component={Form} />
      <Route path="*" component={Home} />
    </Switch>
  </HashRouter>
);

export default Routes;
