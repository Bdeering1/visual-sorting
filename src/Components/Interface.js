import React from 'react';
import './Interface.css';
import Menu from './Menu/Menu';
import Graph from './Graph/Graph';
import { generateArray } from '../Utility/util';

export default class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.resetArray = this.resetArray.bind(this);
  }

  componentDidMount() {
    this.resetArray();
    this.props.setColors(['#151515', '#222225', '#004BA4', '#E0E0E0']);
  }

  resetArray() {
    this.props.updateArray(generateArray(10, 950, 130));
  }

  render() {
    return (
      <div className="Interface" style={{backgroundColor: this.props.colors[1]}}>
        <div className="interface-wrapper">
          <Graph array={this.props.array} colors={this.props.colors} />
          <Menu resetArray={this.resetArray} colors={this.props.colors}/>
        </div>
      </div>
    );
  }
}