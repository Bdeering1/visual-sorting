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
    this.props.setColors(['#151515', '#EEEEEE', '#151515', '']);
  }

  resetArray() {
    this.props.updateArray(generateArray(10, 975, 180));
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.props.colors[1]}}>
        <h1 className="interface-title">Sorting Algorithms</h1>
        <Graph array={this.props.array} colors={this.props.colors} />
        <Menu resetArray={this.resetArray} colors={this.props.colors}/>
      </div>
    );
  }
}