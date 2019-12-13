import React, { Component } from 'react';
import HotProduct from './HotProduct';

import './HotProductList.css'

export class HotProductList extends Component {
    render() {
        let data = this.props.hotProductData.map(d=>{
            return <HotProduct main={d.main} src={d.src} price={d.price} sale={d.sale} sPrice={d.sPrice}></HotProduct>
        })
        return (
                <div className=" hotProductList ">
                    {data}
                </div>
           
        );
    }
}

export default HotProductList;
