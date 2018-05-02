import React, { Component } from "react";
import { graphql } from "react-apollo";
import { CREATE_LINK_MUTATION } from "../graphql/Mutations";
class CreateLink extends Component {
  state = {
    title: "",
    url: ""
  };

  handleCreateLink = async e => {
    e.preventDefault();
    const { title, url } = this.state;
    try {
      const response = await this.props.createLink({
        variables: {
          url,
          title
        }
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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

export default graphql(CREATE_LINK_MUTATION, { name: "createLink" })(
  CreateLink
);
