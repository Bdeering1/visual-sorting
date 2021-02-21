import React from 'react';
import './Menu.css';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.resetArray();
    }

    render() {
        return (
            <div className="menu-container" >
                <button onClick={this.handleClick} className="menu-item">Generate New Array</button>
                <button className="menu-item">Algo 1</button>
                <button className="menu-item">Algo 2</button>
                <button className="menu-item">Algo 3</button>
                <button className="menu-item">Algo 4</button>
            </div>
        );
    }
}