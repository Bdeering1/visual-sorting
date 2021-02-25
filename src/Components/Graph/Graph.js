import React from 'react';
import './Graph.css';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div
        className="bar-graph"
        style={{backgroundColor: this.props.colors.light,borderColor: this.props.colors.text}}
      >
        {
          this.props.array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{height: `${value/10}%`, backgroundColor: this.props.colors.accent}}
            />
          ))
        }
      </div>
    );
  }
}