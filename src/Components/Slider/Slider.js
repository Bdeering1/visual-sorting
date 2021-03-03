import React from 'react';
import './Slider.css';


export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      min: 4,
      max: 128,
      heightRatio: 0.8,
      query: false
    }
    this.updateSlider = this.updateSlider.bind(this);
  }

  componentDidMount() {
    this.updateSlider();
    window.addEventListener('resize', () => {
      this.updateSlider();
    })
  }

  updateSlider() {
    this.setState({
      query: window.matchMedia("(min-width: 800px)").matches
    });
    this.setState((state) => ({
      max: state.query ? 128 : 48
    }))
  }

  handleChange(e) {
    this.props.updateSize(e.target.value);
  }

  render() {
    let outputPos = ((this.props.arraySize - this.state.min) * 100) / (this.state.max - this.state.min);
    return (
      <div className="slider">
        <input
          type="range"
          min={this.state.min} max={this.state.max}
          value={this.props.arraySize}
          className="range-slider"
          id="range-slider"
          onChange={this.handleChange}
          style={{
            width: this.state.query ? this.state.heightRatio*100 + "vh" : "100%"
          }}
        />
        <output
          htmlFor="range-slider"
          className="counter"
          style={{
            color: this.state.query ? this.props.colors.text : this.props.colors.light,
            backgroundColor: this.state.query ? this.props.colors.light : this.props.colors.accent,
            bottom: this.state.query ?
              `calc(${outputPos * this.state.heightRatio}vh - ${outputPos}*28px/100)`
              : 0
          }}
        >{this.props.arraySize}</output>
      </div>
    );
  }
}