import React from 'react';
import './Graph.css';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="bar-graph" style={{backgroundColor: this.props.colors[1]}}>
        {
          this.props.array.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{height: `${value/10}%`, backgroundColor: this.props.colors[2]}}
            />
          ))
        }
      </div>
    );
  }
}