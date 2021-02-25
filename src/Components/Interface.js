import React from 'react';
import './Interface.css';
import Menu from './Menu/Menu';
import Graph from './Graph/Graph';
import { resetArray } from '../Utility/sortingMethods';


export default class Interface extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    resetArray();
    this.props.setColors({
      light:'#E0E0E0',
      dark:'#222225',
      accent:'#004BA4',
      selected: 'orange',
      text:'#151515'
    });
  }

  render() {
    return (
      <div className="interface" style={{backgroundColor: this.props.colors.dark}}>
        <div className="interface-wrapper">
          <Graph array={this.props.array} selected={this.props.selected} colors={this.props.colors} />
          <Menu colors={this.props.colors}/>
        </div>
      </div>
    );
  }
}