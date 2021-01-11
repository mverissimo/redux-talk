import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { App } from "../containers/App";
import { Home } from "../pages/Home";

function Routes() {
  return (
    <Router basename="redux-talk">
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </App>
    </Router>
  );
}

export default Routes;
