import React from 'react';
import './SideBar.css';


export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      min: 3,
      max: 60,
      heightRatio: 0.7
    }
  }

  handleChange(e) {
    this.props.updateSize(e.target.value);
  }

  render() {
    let outputPos = ((this.props.arraySize - this.state.min) * 100) / (this.state.max - this.state.min);
    return (
      <div className="sidebar">
        <input
          type="range"
          min={this.state.min} max={this.state.max}
          orient="vertical"
          value={this.props.arraySize}
          className="slider"
          id="range-slider"
          onChange={this.handleChange}
          style={{height: this.state.heightRatio*100 + "%"}}
        />
        <output
          htmlFor="range-slider"
          className="counter"
          style={{
            color: this.props.colors.text,
            backgroundColor: this.props.colors.light,
            bottom: `calc(15% + ${outputPos * this.state.heightRatio}% - ${outputPos}*1em/100)`
          }}
        >{this.props.arraySize}</output>
      </div>
    );
  }
}