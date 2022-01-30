import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contract from "./pages/Contracts";

export default () =>{

    return (
        <Router>
          <Switch>
            <Route path="/" component={Contract} />
          </Switch>
        </Router>
      );
}
