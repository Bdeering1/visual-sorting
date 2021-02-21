import React from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Graph from './Graph/Graph';
import { randFromInterval } from '../Utility/Utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
    this.generateArray = this.generateArray.bind(this);
  }

  generateArray() {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array.push(randFromInterval(10, 900));
    }
    this.setState({ array });
  }

  render() {
    return (
      <div className="App">
        <Menu generateArray={this.generateArray} />
        <Graph array={this.state.array} generateArray={this.generateArray} />
      </div>
    );
  }
}