import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { LOGIN_USER_MUTATION } from '../graphql/Mutations';
import { AUTH_TOKEN, ROUTES } from './Constants';
export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    try {
      const response = await this.loginUser({
        variables: {
          username,
          password,
        },
      });
      const { token } = response.data.login;
      this.saveUserToken(token);
      this.props.history.push(ROUTES.links);
    } catch (e) {
      // do something useful with the error here please
      console.log(e.message);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  saveUserToken = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  render() {
    return (
      <Mutation mutation={LOGIN_USER_MUTATION}>
        {(loginUser, { data, loading, error }) => {
          // add the login function to the class instance
          // I did this cuz I'm not smart 😎, I wanted to be quick & dirty
          this.loginUser = loginUser;

          return (
            <Fragment>
              <form onSubmit={this.handleLogin}>
                {loading && <div>Loading.....</div>}
                {error && <div>Error: {error.message}</div>}
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
              <br />
              <br />
              <Link to="/register">Click to Register</Link>
            </Fragment>
          );
        }}
      </Mutation>
    );
  }
}
