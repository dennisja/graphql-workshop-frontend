import React, { Component } from "react";

export default class CreateLink extends Component {
  state = {
    title: "",
    url: ""
  };

  handleCreateLink = e => {
    e.preventDefault();
    console.log(this.state)
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleCreateLink}>
          <div>
            <input type="text" name="title" placeholder="title" />
            <input type="text" name="url" placeholder="url" />
            <input type="submit" value="Add Link" />
          </div>
        </form>
      </div>
    );
  }
}
