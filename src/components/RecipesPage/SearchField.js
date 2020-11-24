import React from "react";
import "./searchField.css";

export default class SearchField extends React.Component {
  state = {
    searchField: "",
  };

  searchFieldsHandler = (event) => {
    this.setState({ searchField: event.target.value.toLowerCase() });
  };

  render() {
    return (
      <div className="searchFieldContainer">
        <input
          className="searchField"
          type="text"
          onChange={this.searchFieldHandler}
          placeholder="Search beer by name"
        />
      </div>
    );
  }
}
