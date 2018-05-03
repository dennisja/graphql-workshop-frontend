import React, { Component } from "react";
import { graphql } from "react-apollo";
import { CREATE_LINK_MUTATION } from "../graphql/Mutations";
import { ROUTES } from "./Constants";
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
      this.props.history.push(ROUTES.links);
    } catch (error) {
      console.log(error);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { loading, error } = this.props.createLink;

    return (
      <div>
        {loading && <div>Loadind....</div>}
        {error && <div>Error: {error.message}</div>}
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
