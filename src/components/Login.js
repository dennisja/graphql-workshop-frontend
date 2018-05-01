import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <br />
          <br />
          <div>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
