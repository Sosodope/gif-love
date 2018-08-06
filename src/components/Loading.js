import React from "react";
import { Col, Alert } from "react-bootstrap";

const Loading = props => {
  return (
    <React.Fragment>
      <Col lg={12}>
        <Alert bsStyle="warning" className="loading">
          <strong>Loading. </strong> Please wait
        </Alert>
      </Col>
    </React.Fragment>
  );
};

export default Loading;
