import React, { Component } from 'react';
import './Slider.css';

export class Slider extends Component {
    render() {
        return (
            <div className="slider">
                <img src={this.props.img}></img>
            </div>
        );
    }
}

export default Slider;
