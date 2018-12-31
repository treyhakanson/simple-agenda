import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Placeholder extends Component {
  static propTypes = {
    emoji: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    const { emoji, text } = this.props;

    return (
      <div>
        <span>{emoji}</span>&nbsp;<span>{text}</span>
      </div>
    );
  }
}
