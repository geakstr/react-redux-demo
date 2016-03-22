import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Redirect, Route, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import "../sass/style.scss";

import createStore from "./store";

import AppContainer from "containers/app";

const store = createStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer} />
    </Router>
  </Provider>, document.getElementById("app")
);