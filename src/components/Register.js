import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from 'react-apollo';

export default class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: ""
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleRegistration = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleRegistration}>
          <div>
            <br />
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={this.handleInputChange}
            />
            <br />
            <br />

            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={this.handleInputChange}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleInputChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              onChange={this.handleInputChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              onChange={this.handleInputChange}
            />
            <br />
            <br />
            <input type="submit" value="Register" />
          </div>
        </form>

        <br />
        <br />
        <Link to="/">Click to Login</Link>
      </div>
    );
  }
}
