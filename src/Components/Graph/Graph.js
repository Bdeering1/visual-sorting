import React from 'react';
import './Graph.css';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.resetArray();
  }

  render() {
    return (

      <div className="bar-graph" >
        {
          this.props.array.map((value, index) => (
            <div className="array-bar" key={index} style={{ height: `calc(${value}%/10)` }} />
          ))
        }
      </div>
    );
  }
}