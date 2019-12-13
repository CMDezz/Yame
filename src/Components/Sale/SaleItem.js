import React, { Component } from 'react';
import './SaleItem.css'
export class SaleItem extends Component {
    render() {
        return (
            <div className="saleItem">
                <img src={this.props.img}></img>
                <h2>{this.props.title}</h2>
                <p>{this.props.des}</p>
            </div>
        );
    }
}

export default SaleItem;
