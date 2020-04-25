import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import store from "./app/store";
import Routes from "./app/routes";
import { Global } from "./app/styles";

import Header from "@/app/components/Header";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Global />
      <Header />
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
