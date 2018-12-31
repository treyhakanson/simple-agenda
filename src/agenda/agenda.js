import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import Day from "./day";

const AgendaWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export default class Agenda extends Component {
  static propTypes = {
    onCompleted: PropTypes.func.isRequired,
    week: PropTypes.arrayOf(PropTypes.instanceOf(moment)).isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          completed: PropTypes.bool.isRequired,
          category: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          time: PropTypes.string
        })
      )
    )
  };

  static defaultProps = {
    tasks: []
  };

  render() {
    const { onCompleted, week, tasks } = this.props;

    return (
      <AgendaWrapper>
        {week.map((day, i) => (
          <Day
            key={day.utc()}
            onCompleted={j => onCompleted(i, j)}
            day={day}
            tasks={tasks[i]}
          />
        ))}
      </AgendaWrapper>
    );
  }
}
