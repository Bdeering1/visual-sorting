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

  resetArray() {
    this.props.updateArray(generateArray(10, 950));
  }

  render() {
    return (
      <div className="App">
        <Menu resetArray={this.resetArray} />
        <Graph array={this.props.array} resetArray={this.resetArray} />
      </div>
    );
  }
}