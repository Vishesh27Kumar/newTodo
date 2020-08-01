import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={() => <Home status="all" />} />
      <Route path="/active" component={() => <Home status="active" />} />
      <Route path="/completed" component={() => <Home status="completed" />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
