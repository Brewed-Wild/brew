import React from "react";
import { BeerSearch } from "../../../contexts/BeerSearch";
import "./searchField.css";

class SearchField extends React.Component {
  render() {
    const { searchFieldHandler } = React.useContext(BeerSearch);
    return (
      <div className="searchFieldContainer">
        <input
          className="searchField"
          type="text"
          onChange={searchFieldHandler}
          placeholder="Search beer by name"
        />
      </div>
    );
  }
}

export default SearchField;
