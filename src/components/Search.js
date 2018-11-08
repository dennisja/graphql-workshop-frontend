import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
class Search extends Component {
  state = {
    search: '',
  };

  handleSearch = (e) => {
    e.preventDefault();
    // TODO: do search logic here 
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

export default withApollo(Search);
