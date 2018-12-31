import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DayOfWeek = styled.p`
  font-size: 1.5em;
`;

const DayOfMonth = styled.p`
  font-weight: bold;
  font-size: 2.25em;
`;

export default class Date extends Component {
  static propTypes = {
    day: PropTypes.instanceOf(moment).isRequired
  };

  render() {
    const { day, ...props } = this.props;
    const dayOfMonth = day.format("D");
    const dayOfWeek = day.format("ddd");

    return (
      <DateWrapper {...props}>
        <DayOfWeek>{dayOfWeek}</DayOfWeek>
        <DayOfMonth>{dayOfMonth}</DayOfMonth>
      </DateWrapper>
    );
  }
}
