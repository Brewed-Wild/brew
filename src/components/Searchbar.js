import React from 'react';

export default function Searchbar(props) {
  const { searchBeers } = props;
  return (
    <form className="form-inline pl-30">
      <input onChange={searchBeers} className="form-control mr-sm-2" id="searchfield" type="search" placeholder="&#x1F50D; Search for..." aria-label="Search" />
    </form>
  );
}
