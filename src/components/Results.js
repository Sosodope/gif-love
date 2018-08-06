import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

const gifStyle = {
  height: 250,
  width: "100%"
};
const smPadding = {
  padding: 5
};

class Results extends Component {
  render() {
    return (
      <React.Fragment>
        <Col sm={6} lg={4} style={smPadding}>
          <a href={this.props.link} target="_blank">
            <img style={gifStyle} src={this.props.src} alt="Could not load" />
          </a>
        </Col>
      </React.Fragment>
    );
  }
}

export default Results;
