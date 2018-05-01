import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateLink from "./CreateLink";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import LinkList from "./LinkList";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/add-link" component={CreateLink} />
    <Route path="/register" component={Register} />
    <Route path="/search" component={Search} />
    <Route path="/links" component={LinkList} />
  </Switch>
);

export default Routes;
