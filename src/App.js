import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import axios from "axios";

class App extends Component {
  state = {
    gifs: []
  };
  componentDidMount() {
    axios
      .get(`https://api.tenor.com/v1/trending?limit=48&key=Y1GGCZ8TPZAD`)
      .then(res => {
        this.setState({
          gifs: res.data.results
        });
      });
  }
  render() {
    let smPadding = {
      padding: 5
    };
    return (
      <Grid className="py3">
        <Row>
          <Col lg={12} style={smPadding}>
            <PageHeader className="page-header">
              Gif Love
              <small className="subtitle"> give love, get love</small>
            </PageHeader>
          </Col>
          <Col lg={12}>
            <SearchBar searchGifs={this.handleSearch} />
          </Col>
        </Row>
        <h3>Trending Gifs</h3>
        <Row>
          {this.state.gifs.map(gif => {
            return (
              <Results
                key={gif.id}
                src={gif.media[0].tinygif.url}
                link={gif.url}
              />
            );
          })}
        </Row>
      </Grid>
    );
  }
}

export default App;
