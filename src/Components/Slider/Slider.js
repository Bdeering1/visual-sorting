import React from 'react';
import './Slider.css';


export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      heightRatio: 0.8
    }
  }

  handleChange(e) {
    this.props.updateSize(e.target.value);
  }

  render() {
    let outputPos = ((this.props.arraySize - this.props.min) * 100) / (this.props.max - this.props.min);
    return (
      <div className="slider" style={{opacity: this.props.initialized ? 1 : 0}}>
        <input
          type="range"
          min={this.props.min} max={this.props.max}
          value={this.props.arraySize}
          className="range-slider"
          id="range-slider"
          aria-label="Array Size Slider"
          onChange={this.handleChange}
          style={{
            width: this.props.query ? this.state.heightRatio*100 + "vh" : "100%"
          }}
        />
        <output
          htmlFor="range-slider"
          className="counter"
          style={{
            color: this.props.query ? this.props.colors.text : this.props.colors.light,
            backgroundColor: this.props.query ? this.props.colors.light : this.props.colors.accent,
            bottom: this.props.query ?
              `calc(${outputPos * this.state.heightRatio}vh - ${outputPos}*28px/100)`: 0
          }}
        >{this.props.arraySize}</output>
      </div>
    );
  }
}