import React from 'react';
import './Menu.css';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnCount: 3,
            buttons: [
                {text: 'New Array', onClick: this.props.actions.resetArray},
                {text: 'Bubble Sort', onClick: this.props.actions.bubbleSort},
                {text: 'Merge Sort', onClick: this.props.actions.mergeSort}
                /*{text: 'Algo 3', onClick: this.props.actions.resetArray},
                {text: 'Algo 4', onClick: this.props.actions.resetArray} */
            ]
        }
    }

    render() {
        return (
            <div className="menu-container">
                {this.state.buttons.map((button, idx) => (
                    <button
                        onClick={button.onClick}
                        className="menu-item"
                        key={idx}
                        style={{
                            backgroundColor: this.props.colors.accent,
                            borderColor: this.props.colors.text,
                            color: this.props.colors.light,
                            width: 90 / this.state.btnCount + "%"
                        }}
                    >{button.text}</button>
                ))}
            </div>
        );
    }
}