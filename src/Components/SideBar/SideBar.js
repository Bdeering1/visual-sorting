import React from 'react';
import './SideBar.css';
import { updateSize } from '../../Utility/sortingMethods';


export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    updateSize(e.target.value);
  }

  render() {
    return (
      <div className="sidebar">
        <input
          type="range"
          min="3" max="60"
          orient="vertical"
          value={this.props.arraySize}
          className="slider"
          id="range-slider"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}