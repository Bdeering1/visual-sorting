import React from 'react';
import './Interface.css';
import Graph from './Graph/Graph';
import SideBar from './SideBar/SideBar';
import Menu from './Menu/Menu';


export default class Interface extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.resetArray();
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
          <Graph array={this.props.array} selected={this.props.selected} colors={this.props.colors}/>
          <SideBar updateSize={this.props.actions.updateSize} arraySize={this.props.arraySize} colors={this.props.colors}/>
        </div>
          <Menu actions={this.props.actions} colors={this.props.colors}/>
      </div>
    );
  }
}