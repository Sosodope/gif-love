import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  InputGroup,
  ButtonToolbar,
  Button
} from "react-bootstrap";

class SearchBar extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={this.props.value}
              placeholder="Find a gif to share"
              onChange={this.props.handleChange}
            />
            <ButtonToolbar>
              <Button bsStyle="primary" type="submit">
                <i className="fa fa-search" aria-hidden="true">
                  {" "}
                </i>
              </Button>
            </ButtonToolbar>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

export default SearchBar;
