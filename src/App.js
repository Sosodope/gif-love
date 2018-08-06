import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import axios from "axios";
import Loading from "./components/Loading";

class App extends Component {
  state = {
    gifs: [],
    searchTerm: "",
    loading: true
  };
  componentDidMount() {
    axios
      .get(`https://api.tenor.com/v1/trending?limit=48&key=Y1GGCZ8TPZAD`)
      .then(res => {
        if (this.state.loading) {
          this.setState({
            gifs: res.data.results,
            loading: false
          });
        }
      });
  }
  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    let queryTerm = this.state.searchTerm;
    axios
      .get(`https://api.tenor.com/v1/search?q=${queryTerm}&key=Y1GGCZ8TPZAD`)
      .then(res => {
        if (this.state.loading) {
          this.setState({ gifs: res.data.results, loading: false });
        }
      });
  };
  render() {
    let smPadding = {
      padding: 5
    };
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Loading />
        ) : (
          <Grid className="py3">
            <Row>
              <Col lg={12} style={smPadding}>
                <PageHeader className="page-header">
                  Gif Love
                  <small className="subtitle"> give love, get love</small>
                </PageHeader>
              </Col>
              <Col lg={12}>
                <SearchBar
                  searchGifs={this.handleSearch}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </Col>
            </Row>
            <h3>Hot Gifs</h3>
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
        )}
      </React.Fragment>
    );
  }
}

export default App;
