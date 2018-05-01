import React from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import { ROUTES } from "./Constants";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to YoLinks</h1>
        <div className="App-navigation">
          <NavLink to={ROUTES.home} activeClassName="active" exact>
            Home
          </NavLink>{" "}
          |{" "}
          <NavLink to={ROUTES.links} activeClassName="active" exact>
            Links
          </NavLink>{" "}
          |{" "}
          <NavLink to={ROUTES.register} activeClassName="active">
            Register
          </NavLink>{" "}
          |{" "}
          <NavLink to={ROUTES.users} activeClassName="active">
            Users
          </NavLink>{" "}
          |{" "}
          <NavLink to={ROUTES.createLink} activeClassName="active">
            CreateLink
          </NavLink>{" "}
          |{" "}
          <NavLink to={ROUTES.search} activeClassName="active">
            Search
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
