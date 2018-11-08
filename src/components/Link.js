import React, { Component } from "react";

export default class Link extends Component {
  render() {
    const {
      title,
      url,
      postedBy: { username }
    } = this.props.link;
    return (
      <div className="users">
        {title} ({url}) by {username}
      </div>
    );
  }

  _likeLink = async () => {
    // TODO: Implement liking a link here
  };
}
