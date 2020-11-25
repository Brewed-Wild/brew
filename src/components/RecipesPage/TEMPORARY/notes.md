// contexts > BeerSearch
// holds everything together
// holds state and the method for 'event' or 'onClick'

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
              searchField: this.state.searchField,
              searchFieldHandler: this.searchFieldHandler,
            }}
          >
            {this.props.children}
          </BeerSearch.Provider>
        );
      }
    }
    export default BeerSearchProvider;

// NAVBAR
// holds the input
// import { BeerSearch } from "../../contexts/BeerSearch";

function Navbar(props) {
const { searchFieldHandler } = React.useContext(BeerSearch);
return (
<div className="pos-f-t">
<span className="align-self-center">
<input
          className="searchField"
          type="text"
          onChange={searchFieldHandler}
          placeholder="Search beer by name"
        />
</span>
</div>

// BEERLIST
