import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

class App extends Component {
  render() {
    return (
      <div>
        <p>Hey</p>
        <SearchBar searchGifs={this.handleSearch} />
        <Results />
      </div>
    );
  }
}

export default App;
