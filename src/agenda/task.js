import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CATEGORY_INFO } from "../utils/parse";

const TaskWrapper = styled.div`
  border-radius: 3px;
  color: #fff;
  background-color: ${props => props.color};
  padding: 0.5em;
  font-size: font-size: 0.7em;
  ${props => {
    if (props.completed) {
      return `
          opacity: 0.35;
        `;
    }
  }}

  &:not(:last-of-type) {
    margin-bottom: 0.75em;
  }

  &::before {
    content: "${props => props.emoji}";
    margin-right: 0.5em;
    font-size: 0.85em;
  }
`;

export default class Task extends Component {
  static propTypes = {
    onCompleted: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string
  };

  render() {
    const { onCompleted, completed, category, text, time } = this.props;

    return (
      <TaskWrapper
        onClick={onCompleted}
        completed={completed}
        {...CATEGORY_INFO[category]}
      >
        <span>{text}</span>
        <br />
        {time && <span>{time}</span>}
      </TaskWrapper>
    );
  }
}
