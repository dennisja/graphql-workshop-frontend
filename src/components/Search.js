import React, { Component } from "react";
import { withApollo } from 'react-apollo'

export default class Search extends Component {
  state = {
    search: ""
  };

  handleSearch = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSearch}>
          <input
            type="search"
            name="search"
            onChange={this.handleInputChange}
            placeholder="Search..."
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
