import React, { createContext, Component } from "react";

export const BeerContext = createContext();

class BeerContextProvider extends Component {
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
      <BeerContext.Provider
        value={{
          searchField: this.state.searchField,
          searchFieldHandler: this.searchFieldHandler,
        }}
      >
        {this.props.children}
      </BeerContext.Provider>
    );
  }
}

export default BeerContextProvider;
