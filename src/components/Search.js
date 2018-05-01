import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: ""
  };

  handleSearch = e => {
    e.preventDefault();
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSearch}>
          <input
            type="search"
            name="search"
            onChange={({ target: { name, value } }) =>
              this.setState({ [name]: value })
            }
            placeholder="Search..."
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
