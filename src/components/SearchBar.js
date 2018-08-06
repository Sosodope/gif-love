import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <form onSubmit={this.props.searchGifs}>
        <input type="text" placeholder="looking for a gif?" name="search" />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
