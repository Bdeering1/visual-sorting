import React from 'react';
import './Menu.css';
import { resetArray } from '../../Utility/sortingMethods';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {text: 'Generate New Array', onClick: () => resetArray(this.props.updateArray, this.props.updateSelected)},
                {text: 'Bubble Sort', onClick: () => resetArray(this.props.updateArray, this.props.updateSelected)},
                {text: 'Algo 2', onClick: () => resetArray(this.props.updateArray, this.props.updateSelected)},
                {text: 'Algo 3', onClick: () => resetArray(this.props.updateArray, this.props.updateSelected)},
                {text: 'Algo 4', onClick: () => resetArray(this.props.updateArray, this.props.updateSelected)}
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
                            backgroundColor: this.props.colors.light,
                            borderColor: this.props.colors.text,
                            color: this.props.colors.text
                        }}
                    >{button.text}</button>
                ))}
            </div>
        );
    }
}