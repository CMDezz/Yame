import React, { Component } from 'react';
import AlbumItems from './AlbumItems';

import './Album.css'

export class Album extends Component {
    render() {
        let data = this.props.data.map(d=>{
            return (<AlbumItems title={d.title} mainPic={d.src[0]} sub1={d.src[1]} sub2={d.src[2]}sub3={d.src[3]}sub4={d.src[4]} ></AlbumItems>)
        })
        return (
            <div className="Album ">
             {data}
            </div>
        );
    }
}

export default Album;
