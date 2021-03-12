import React from 'react';
import './Interface.css';
import Graph from './Graph/Graph';
import Slider from './Slider/Slider';
import SidePanel from './SidePanel/SidePanel';
import Menu from './Menu/Menu';
import '../fonts.css';


export default class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: true
    }
    this.updateQuery = this.updateQuery.bind(this);
  }

  componentDidMount() {
    this.props.actions.init();
    this.props.setColors({
      light:'#F3F7FB',
      backdrop:'#222225',
      accent:'#004BA4',
      selected: '#D65265',
      text:'#151515'
    });
    this.updateQuery();
    window.addEventListener('resize', () => {
      this.updateQuery();
    })
  }

  componentDidUpdate() {
    let innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.documentElement.style.setProperty('--inner-height', `${innerHeight}px`);
  }

  updateQuery() {
    let query = window.matchMedia("(min-width: 850px)").matches
    this.setState({ query });
    this.props.actions.updateMax(query ? 128 : 48);
  }

  render() {
    return (
      <div className="interface" style={{backgroundColor: this.props.colors.backdrop}}>
        <div className="grid-wrapper">
          <header>
            <h1
              className="title"
              style={{
                color: this.props.colors.accent
              }}
            >Visual Sorting App</h1>
            <h2
              className="sub-title"
              style={{
                color: this.props.colors.accent
              }}
            >By Bryn Deering</h2>
          </header>
          <Graph
            array={this.props.array}
            selected={this.props.selected}
            colors={this.props.colors}
            initialized={this.props.initialized}
            transition={this.props.transition}
            arraySize={this.props.arraySize}
          />
          <Slider
            updateSize={this.props.actions.updateSize}
            arraySize={this.props.arraySize}
            colors={this.props.colors}
            initialized={this.props.initialized}
            query={this.state.query}
            min={this.props.minSize}
            max={this.props.maxSize}
          />
          <SidePanel />
          <Menu
          actions={this.props.actions}
          colors={this.props.colors}
          initialized={this.props.initialized}
          />
        </div>
      </div>
    );
  }
}