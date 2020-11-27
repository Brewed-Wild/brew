import React, { createContext, Component } from "react";

export const BeerSearch = createContext();

class BeerSearchProvider extends Component {
  state = {
    searchField: "",
  };

  searchFieldHandler = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    return (
      <BeerSearch.Provider
        value={{
          searchField: this.state.searcField,
          searchFieldHandler: this.searchFieldHandler,
        }}
      >
        {this.props.children}
      </BeerSearch.Provider>
    );
  }
}

export default BeerSearchProvider;
