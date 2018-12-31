import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Task from "./task";
import Placeholder from "../placeholder";

const TasksWrapper = styled.div`
  margin-left: 0.75em;
`;

export default class Tasks extends Component {
  static propTypes = {
    onCompleted: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        category: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        time: PropTypes.string
      })
    )
  };

  static defaultProps = {
    tasks: []
  };

  render() {
    const { tasks, onCompleted, ...props } = this.props;

    return (
      <TasksWrapper {...props}>
        {!tasks.length && <Placeholder emoji="😴" text="Nothing to do today" />}
        {tasks.map((task, i) => (
          <Task key={i} onCompleted={() => onCompleted(i)} {...task} />
        ))}
      </TasksWrapper>
    );
  }
}
