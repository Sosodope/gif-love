import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import { Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <p>Hey</p>
          </Col>
          <Col>
            <SearchBar searchGifs={this.handleSearch} />
          </Col>
        </Row>
        <div className="level-item has-text-centered">
          <Results />
        </div>
      </Grid>
    );
  }
}

export default App;
