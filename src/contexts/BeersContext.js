import React, { createContext, Component } from 'react';

export const BeersContext = createContext();

export class BeersContextProvider extends Component {
  state = {
    beers: [],
  }

  render() {
    return (
      hello
    );
  }
}

export default BeersContext;
