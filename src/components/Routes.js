import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateLink from "./CreateLink";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import LinkList from "./LinkList";
import UserList from './Users';
import { ROUTES } from "./Constants";

const Routes = () => (
  <Switch>
    <Route path={ROUTES.home} exact component={Login} />
    <Route path={ROUTES.createLink} component={CreateLink} />
    <Route path={ROUTES.register} component={Register} />
    <Route path={ROUTES.search} component={Search} />
    <Route path={ROUTES.links} component={LinkList} />
    <Route path={ROUTES.users} component={UserList} />
    <Route component={() => <div>Page Not Found</div>} />
  </Switch>
);

export default Routes;
