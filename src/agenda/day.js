import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";
import Date from "./date";
import Tasks from "./tasks";

const DayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.75rem;
  border-radius: 3px;
  margin-bottom: 0.75em;
  border: 1px solid #ededed;
`;

const FlexDate = styled(Date)`
  flex: 2 0 0;
`;

const FlexTasks = styled(Tasks)`
  flex: 8 0 0;
`;

export default class Day extends Component {
  static propTypes = {
    onCompleted: PropTypes.func.isRequired,
    day: PropTypes.instanceOf(moment).isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        category: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        time: PropTypes.string
      })
    )
  };

  render() {
    const { onCompleted, day, tasks } = this.props;

    return (
      <DayWrapper>
        <FlexDate day={day} />
        <FlexTasks tasks={tasks} onCompleted={onCompleted} />
      </DayWrapper>
    );
  }
}
