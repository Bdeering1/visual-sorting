import React from 'react';
import './Menu.css';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnCount: 0,
            buttons: [
                {text: 'New Array', onClick: this.props.actions.resetArray},
                {text: 'Bubble Sort', onClick: this.props.actions.bubbleSort},
                {text: 'Merge Sort', onClick: this.props.actions.mergeSort},
                {text: 'Quick Sort', onClick: this.props.actions.quickSort}
            ]
        }
    }

    componentDidMount() {
        this.setState({
            btnCount: this.state.buttons.length
        })
    }

    render() {
        return (
            <div
                className="menu-container"
                style={{
                    background: this.props.initialized ? 'rgba(216,221,224, 0.9)' : this.props.colors.light
                }}
            >
                {this.state.buttons.map((button, idx) => (
                    <button
                        onClick={button.onClick}
                        className="menu-item"
                        key={idx}
                        style={{
                            backgroundColor: this.props.colors.accent,
                            borderColor: this.props.colors.text,
                            color: this.props.colors.light,
                            width: 90 / this.state.btnCount + '%',
                            display: this.props.initialized ? '' : 'none'
                        }}
                    >{button.text}</button>
                ))}
            </div>
        );
    }
}