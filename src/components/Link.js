import React, { Component } from "react";

export default class Link extends Component {
  render() {
    const {
      title,
      url,
      postedBy: { username }
    } = this.props.link;
    return (
      <div>
        <div>
          {title} ({url}) by {username}
        </div>
      </div>
    );
  }

  _likeLink = async () => {
    // TODO: Implement liking a link here
  };
}
