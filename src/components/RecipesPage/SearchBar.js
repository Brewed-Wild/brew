import React from "react";

function SearchBar (props) {

    return(
        <div>
            <p>ABV</p>
            <input type="number"  value={props.greaterThanAbv} name="greaterThanAbv" onChange={props.searchBeer} />
            <input type="number"  value={props.lessThanAbv} name="lessThanAbv" onChange={props.searchBeer} />
            <br/>
            <p>IBU</p>
            <input type="number"  value={props.greaterThanIbu} name="greaterThanIbu" onChange={props.searchBeer} />
            <input type="number"  value={props.lessThanIbu} name="lessThanIbu" onChange={props.searchBeer} />
            <br />
            <p>EBC</p>
            <input type="number"  value={props.greaterThanEbc} name="greaterThanEbc" onChange={props.searchBeer} />
            <input type="number"  value={props.lessThanEbc} name="lessThanEbc" onChange={props.searchBeer} />
        </div>
    )
}

export default SearchBar;