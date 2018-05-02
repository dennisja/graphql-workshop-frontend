import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import { REGISTER_USERS_MUTATION } from "../graphql/Mutations";
import { ROUTES } from './Constants'

class Register extends Component {
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

  handleRegistration = async e => {
    e.preventDefault();
    const {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
      username
    } = this.state;
    try {
      const response = await this.props.registerUser({
        variables: {
          firstName,
          email,
          lastName,
          password,
          username
        }
      });
      // get created user details
      const { user } = response.data.createUser;
      console.log(user)
      // take user to the login screen
      this.props.history.push(ROUTES.home)
    } catch (error) {
      const { message, graphQLErrors, networkError, extraInfo} = error
      console.log("Error message", message);
      console.log("Graphql Errors", graphQLErrors);
      console.log("Network Errors", networkError);
      console.log("Extra Info", extraInfo);
    }
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
              type="email"
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

export default graphql(REGISTER_USERS_MUTATION, { name: "registerUser" })(
  Register
);
