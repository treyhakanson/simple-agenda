import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
`;

export default class Overlay extends Component {
  static propTypes = {
    visible: PropTypes.bool
  };

  static defaultProps = {
    visible: false
  };

  render() {
    const { visible } = this.props;

    if (!visible) {
      return <noscript />;
    }

    return (
      <OverlayWrapper>
        <h3>🗂 Upload Agenda</h3>
      </OverlayWrapper>
    );
  }
}
