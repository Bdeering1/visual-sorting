import React from 'react';
import './Menu.css';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {text: 'Generate New Array', onClick: () => this.props.resetArray()},
                {text: 'Algo 1', onClick: () => this.props.resetArray()},
                {text: 'Algo 2', onClick: () => this.props.resetArray()},
                {text: 'Algo 3', onClick: () => this.props.resetArray()},
                {text: 'Algo 4', onClick: () => this.props.resetArray()}
            ]
        }
    }

    render() {
        return (
            <div className="menu-container">
                {this.state.buttons.map((button) => (
                    <button
                        onClick={button.onClick}
                        className="menu-item"
                        style={{
                            backgroundColor: this.props.colors[3],
                            borderColor: this.props.colors[0],
                            color: this.props.colors[0]
                        }}
                    >{button.text}</button>
                ))}
            </div>
        );
    }
}