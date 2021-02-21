import React from 'react';
import './Graph.css';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }
  componentDidMount() {
    this.props.generateArray();
    this.setState({
      array: this.props.array
    })
  }

  render() {
    console.log(this.props.array);

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