import React from 'react';
import './Interface.css';
import Graph from './Graph/Graph';
import Slider from './Slider/Slider';
import SidePanel from './SidePanel/SidePanel';
import Menu from './Menu/Menu';


export default class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: true
    }
    this.updateQuery = this.updateQuery.bind(this);
  }

  componentDidMount() {
    this.props.actions.resetArray();
    this.props.setColors({
      light:'#E0E0E0',
      dark:'#222225',
      accent:'#004BA4',
      selected: '#D65265',
      text:'#151515'
    });
    this.updateQuery();
    window.addEventListener('resize', () => {
      this.updateQuery();
    })
  }

  updateQuery() {
    this.setState({
      query: window.matchMedia("(min-width: 850px)").matches
    });
    this.props.actions.updateMax(this.state.query ? 128 : 48);
  }

  render() {
    return (
      <div className="interface" style={{backgroundColor: this.props.colors.dark}}>
        <div className="grid-wrapper">
          <Graph
            array={this.props.array}
            selected={this.props.selected}
            colors={this.props.colors}
            arraySize={this.props.arraySize}
          />
          <Slider
            updateSize={this.props.actions.updateSize}
            arraySize={this.props.arraySize}
            colors={this.props.colors}
            query={this.state.query}
            min={this.props.minSize}
            max={this.props.maxSize}
          />
          <SidePanel />
          <Menu actions={this.props.actions} colors={this.props.colors}/>
        </div>
      </div>
    );
  }
}