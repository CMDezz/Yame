import React, { Component } from 'react';
import SaleItem from './SaleItem';
import './Sale.css'

export class Sale extends Component {
    render() {
        let saleItem = this.props.saleData.map(sData => {
            return <SaleItem img={sData.img} title={sData.title} des={sData.des}></SaleItem>
        })
        return (
            <div className="Sale">
                <div>
                    <div className="Content">
                        <h2>Các chương trình Khuyến mãi</h2>
                        <p>Đừng bỏ lỡ các chương trình khuyến mãi Hot tại Yame.vn</p>
                    </div>
                    <div className="saleInfor">
                        {saleItem}
                    </div>
                </div>
               <button className="btn btn-watchMore"><i class="fa fa-bars"></i>  Xem thêm nhiều tin khác</button>
            </div>
        );
    }
}

export default Sale;
