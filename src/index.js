import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/home";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={() => <Home status="all" />} />
      <Route path="/active" component={() => <Home status="active" />} />
      <Route path="/completed" component={() => <Home status="completed" />} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
