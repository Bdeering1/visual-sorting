import React from 'react';
import './Graph.css';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div
        className="graph"
        style={{backgroundColor: this.props.colors.light,borderColor: this.props.colors.text}}
      >
        {
          this.props.array.map((value, idx) => (
            <div
              key={idx}
              style={{
                height: `${value/10}%`,
                backgroundColor: this.props.selected[idx] ? this.props.colors.selected : this.props.colors.accent
              }}
            />
          ))
        }
      </div>
    );
  }
}