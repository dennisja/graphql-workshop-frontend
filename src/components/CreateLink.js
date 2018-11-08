import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_LINK_MUTATION } from '../graphql/Mutations';
import { ROUTES } from './Constants';
class CreateLink extends Component {
  state = {
    title: '',
    url: '',
    loading: false,
    error: null,
  };

  handleCreateLink = async (e) => {
    e.preventDefault();
    const { title, url } = this.state;
    try {
      const response = await this.props.createLink({
        variables: {
          url,
          title,
        },
      });
      console.log(response)
      console.log(this.props)
      this.props.history && this.props.history.push(ROUTES.links);
    } catch (error) {
      // do something use ful with the error
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div>
        {loading && <div>Loading....</div>}
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

export default (props) => (
  <Mutation mutation={CREATE_LINK_MUTATION}>
    {(mutate, { loading, error }) => (
      <CreateLink createLink={mutate} loading={loading} error={error} {...props}/>
    )}
  </Mutation>
);
