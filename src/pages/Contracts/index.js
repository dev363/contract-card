import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import List from "./components/List";
import Favorites from "./components/Favorites";
import AddEdit from "./components/AddEdit";

const Contracts = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}favorites`} exact component={Favorites} />
      <Route path={`${match.path}add`} component={AddEdit} />
      <Route path={`${match.path}edit/:editId`} component={AddEdit} />
      <Route path={`${match.url}/`} exact component={List} />
      <Route component={List} />
    </Switch>
  );
};

export default Contracts;
