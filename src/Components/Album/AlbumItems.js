import React, { Component } from 'react';
import './AlbumItems.css';

export class AlbumItems extends Component {
    render() {
        return (
            <div className="AlbumItems ">
                <a href='#' className="d-block title">{this.props.title}</a>
                <p>...</p>
                <div>
                    <img className="main-pic" src={this.props.mainPic}></img>
                    <div className="sub-pic ">
                        <img src={this.props.sub1} className="sub1"></img>
                        <img src={this.props.sub2} className="sub2"></img>
                        <img src={this.props.sub3} className="sub3"></img>
                        <img src={this.props.sub4} className="sub4"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumItems;
