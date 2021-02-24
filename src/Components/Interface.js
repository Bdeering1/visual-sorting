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
    this.props.setColors(['#151515', '#EEEEEE', '#004BA4', '#EEEEEE']);
  }

  resetArray() {
    this.props.updateArray(generateArray(10, 950, 130));
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: "#CCCCD0"}}>
        <div className="interface-wrapper">
          <Graph array={this.props.array} colors={this.props.colors} />
          <Menu resetArray={this.resetArray} colors={this.props.colors}/>
        </div>
      </div>
    );
  }
}