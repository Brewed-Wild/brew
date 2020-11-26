import React from "react";
import "./sliderFilter.css";

class SliderFilter extends React.Component {
  state = {
    value: [],
  };

  handleSlideChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <div className="sliderContainer" onChange={this.handleSliderChange}>
          <input
            className="slider"
            id="myRange"
            type="range"
            min="1"
            max="100"
            value="50"
          />
        </div>
      </div>
    );
  }
}

export default SliderFilter;
