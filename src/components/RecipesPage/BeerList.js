/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import SearchBar from './SearchBar';
// import { Slider } from "shards-react";

import './beerList.css';

class BeerList extends React.Component{
  state = {
    greaterThanAbv: 0,
    lessThanAbv: 20,

    greaterThanIbu: 0,
    lessThanIbu: 40,

    greaterThanEbc: 0,
    lessThanEbc: 80,

    beers: []

    // value: [20, 80],
  }

componentDidMount() {
    this.getBeers()
    
}

getBeers = () => {
    axios.get('https://api.punkapi.com/v2/beers/')
        .then(response => this.setState({ beers : response.data }))
}
getBeersSearch = (event) => {
    const { lessThanAbv, greaterThanAbv, lessThanIbu, greaterThanIbu, greaterThanEbc,lessThanEbc} = this.state;
    const {name, value} = event.target;

    this.setState({ [name]: value }, () => {

        axios.get(`https://api.punkapi.com/v2/beers?abv_lt=${lessThanAbv}&abv_gt=${greaterThanAbv}&ibu_lt=${lessThanIbu}&ibu_gt${greaterThanIbu}&ebc_lt=${lessThanEbc}&ebc_gt${greaterThanEbc}`)
            .then(response => this.setState({ beers : response.data }))      
    })
}

 
// {/* slider from designrevision */}
//   handleSlide(event) {
//     this.setState({
//       value: [parseFloat(event[0]), parseFloat(event[1])]
//     });
//   }


  
// {/* slider from Bootstrap */}
// $('#multi17').mdbRange({
//   single: {
//     active: true,
//     multi: {
//       active: true,
//       rangeLength: 2
//     }
//   }
// });

// $('#multi18').mdbRange({
//   single: {
//     active: false,
//     multi: {
//       active: true,
//       rangeLength: 3
//     }
//   }
// });




render() {
return (

<section>
    
    
  {/* slider from Bootstrap */}
  {/* <form class="multi-range-field my-5 pb-5">
    <input id="multi17" class="multi-range" type="range" />
  </form>

  <form class="multi-range-field my-5 pb-5">
    <input id="multi18" class="multi-range" type="range" />
  </form> */}

  {/* slider from designrevision */}
  {/* <Slider
    connect
    onSlide={this.handleSlide}
    start={this.state.value}
    range={{ min: 0, max: 100 }}
  /> */}

  <div>
      <SearchBar 
      searchBeer={this.getBeersSearch}
      greaterThanAbv={this.state.greaterThanAbv}
      lessThanAbv={this.state.lessThanAbv}
      greaterThanIbu={this.state.greaterThanIbu}
      lessThanIbu={this.state.lessThanIbu}
      greaterThanEbc={this.state.greaterThanEbc}
      lessThanEbc={this.state.lessThanEbc}
      
      />
      
  <div>
      {/* <button onClick={this.getBeersSearch}>Click To Retreive Filtered Beers</button> */}
      {this.state.beers.map(beer => (
          <div className="Card">
          <BeerCard {...beer} key={beer.id}/>
          </div>                      
      ))}
      
  </div>    
</div>
</section>
        
    )
}
}

export default BeerList;






// class BeerList extends React.Component {
//   state = {
//     greaterThanAbv: 0,

//     greaterThanIbu: 0,

//     greaterThanEbc: 0,

//     beers: [],

//     // value: [20, 80],
//   }

//   componentDidMount() {
//     this.getBeers();
//   }

// getBeers = () => {
//   axios.get('https://api.punkapi.com/v2/beers')
//     .then((response) => this.setState({ beers: response.data }));
// }

// getBeersSearch = (event) => {
//   // const {
//   //   lessThanAbv, greaterThanAbv, lessThanIbu, greaterThanIbu, greaterThanEbc, lessThanEbc,
//   // } = this.state;
//   const { name, value } = event.target;
//   this.setState({ [name]: value });
//   // this.setState({ [name]: value }, () => {
//   //   axios.get(`https://api.punkapi.com/v2/beers?abv_lt=${lessThanAbv}&abv_gt=${greaterThanAbv}&ibu_lt=${lessThanIbu}&ibu_gt${greaterThanIbu}&ebc_lt=${lessThanEbc}&ebc_gt${greaterThanEbc}`)
//   //     .then((response) => this.setState({ beers: response.data }));
//   // });
// }

// render() {
//   return (
//     <div>
//       <div>
//         <label>Abv</label>
//         <input
//           type="range"
//           id="Abv"
//           name="greaterThanAbv"
//           min="0"
//           max="20"
//           onChange={(event) => this.getBeersSearch(event)}
//           value={this.state.greaterThanAbv}
//         />
//       </div>
//       <div>
//         <label>Ibu</label>
//         <input
//           type="range"
//           id="Ibu"
//           name="greaterThanIbu"
//           min="0"
//           max="100"
//           onChange={(event) => this.getBeersSearch(event)}
//           value={this.state.greaterThanIbu}
//         />
//       </div>
//       <div>
//         <label>Ebc</label>
//         <input
//           type="range"
//           id="Ebc"
//           name="greaterThanEbc"
//           min="0"
//           max="300"
//           onChange={(event) => this.getBeersSearch(event)}
//           value={this.state.greaterThanEbc}
//         />
//       </div>
//       <div>
//         {this.state.beers.filter(beer => (
//           beer.abv > this.state.greaterThanAbv && beer.ibu > this.state.greaterThanIbu && beer.ebc > this.state.greaterThanEbc)).map((beer) => (
//             <div className="Card">
//               <BeerCard {...beer} key={beer.id} />
//             </div>
//           ))}
//         {/* {this.state.beers.map((beer) => (
//           <div className="Card">
//             <BeerCard {...beer} key={beer.id} />
//           </div>
//         ))} */}
//       </div>
//     </div>
//   );
// }
// }
// export default BeerList;