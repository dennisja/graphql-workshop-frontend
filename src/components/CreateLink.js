import React, { Component } from "react";

export default class CreateLink extends Component {
  state = {
    title: "",
    url: ""
  };

  handleCreateLink = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleCreateLink}>
          <div>
            <br />
            <div>
              <input
                type="text"
                name="title"
                placeholder="title"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div>
              <input
                type="text"
                name="url"
                placeholder="url"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div>
              <input type="submit" value="Add Link" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
