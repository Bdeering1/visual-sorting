import React from 'react';
import './Graph.css';

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }
  componentDidMount() {
    this.generateArray();
  }

  generateArray() {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array.push(randFromInterval(10, 900));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;

    return (
      <div className="bar-graph">
        {array.map((value, index) => (
          <div className="array-bar" key={index} style={{ height: `calc(${value}%/10)` }} />
        ))}
      </div>
    );
  }
}


function randFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
