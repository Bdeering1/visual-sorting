import React from 'react';
import './Interface.css';
import Graph from './Graph/Graph';
import SideBar from './SideBar/SideBar';
import Menu from './Menu/Menu';
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
      selected:'orange',
      text:'#151515'
    });
  }

  render() {
    return (
      <div className="interface" style={{backgroundColor: this.props.colors.dark}}>
        <div className="main-row">
          <Graph array={this.props.array} selected={this.props.selected} colors={this.props.colors} arraySize={this.props.arraySize}/>
          <SideBar colors={this.props.colors} arraySize={this.props.arraySize}/>
        </div>
          <Menu colors={this.props.colors}/>
      </div>
    );
  }
}