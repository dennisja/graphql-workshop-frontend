import React, { Component } from "react";

export default class Link extends Component {
  render() {
    const { title, url } = this.props.link;
    return (
      <div>
        <div>
          {title} ({url})
        </div>
      </div>
    );
  }

  _likeLink = async () => {};
}
