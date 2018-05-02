import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";

import logo from "../logo.png";
import { ROUTES, AUTH_TOKEN } from "./Constants";

const Header = props => {
  const logoutUser = e => {
    e.preventDefault();
    localStorage.clear();
    props.history.push(ROUTES.home);
  };

  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to YoLinks</h1>
        <div className="App-navigation">
          {!authToken && (
            <Fragment>
              <NavLink to={ROUTES.home} activeClassName="active" exact>
                Home
              </NavLink>{" "}
              |{" "}
              <NavLink to={ROUTES.register} activeClassName="active">
                Register
              </NavLink>{" "}
              |{" "}
            </Fragment>
          )}
          <NavLink to={ROUTES.links} activeClassName="active" exact>
            Links
          </NavLink>{" "}
          |{" "}
          <NavLink to={ROUTES.search} activeClassName="active">
            Search
          </NavLink>
          {authToken && (
            <Fragment>
              {" "}
              |{" "}
              <NavLink to={ROUTES.createLink} activeClassName="active">
                CreateLink
              </NavLink>{" "}
              |{" "}
              <NavLink
                activeClassName="active"
                exact
                to="!#"
                onClick={logoutUser}
              >
                Logout
              </NavLink>
            </Fragment>
          )}
        </div>
      </header>
    </div>
  );
};

export default withRouter(Header);
