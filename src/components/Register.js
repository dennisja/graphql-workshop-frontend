import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql, Mutation } from 'react-apollo';
import { REGISTER_USERS_MUTATION } from '../graphql/Mutations';
import { ROUTES } from './Constants';

class RegisterForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    username: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleRegistration = async (e) => {
    e.preventDefault();
    const {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
      username,
    } = this.state;
    try {
      const response = await this.props.registerUser({
        variables: {
          firstName,
          email,
          lastName,
          password,
          username,
        },
      });
      // get created user details
      const { user } = response.data.createUser;
      console.log(user);
      // take user to the login screen
      this.props.history.push(ROUTES.home);
    } catch (error) {
      const { message } = error;
      // do sth useful with the error please
      console.log('Error message', message);
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

const RegisterUser = (props) => (
  <Mutation mutation={REGISTER_USERS_MUTATION}>
    {(mutate, mutationProps) => (
      <RegisterForm registerUser={mutate} {...props} {...mutationProps} />
    )}
  </Mutation>
);

export default RegisterUser;
