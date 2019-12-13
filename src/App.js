import React, { Component } from 'react';

//import components
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Album from './Components/Album/Album';
import HotProductList from './Components/HotProducts/HotProductList'
import Sale from './Components/Sale/Sale';


//import Data
import Data from './Data/Data';
import AoData from './Data/AoData';
import QuanData from './Data/QuanData';
import PhukienData from './Data/PhukienData';
import saleData from './Data/SaleData';

import './App.css';

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:Data,
      AoData : AoData,
      QuanData:QuanData,
      PhukienData:PhukienData,
      saleData:saleData,
    }
  }
  render() {
    
    return (
      <div className="Yame container-fluid" >
        <Navbar ></Navbar>
        <Slider img="./img/cover.jpg"></Slider>
        <Album data={this.state.data}></Album>


        <div className="hotProductAo">
          <div className="titlee">
              <h1>Top sản phẩm HOT</h1>
              <p>Nhưng sản phẩm thời trang hot nhất/mới nhất</p>
          </div>
          <HotProductList hotProductData={this.state.AoData}></HotProductList>
        </div>


        <Slider img='./img/cover2.jpg'></Slider>
        <div className="hotProductQuan">
          <HotProductList hotProductData={this.state.QuanData}></HotProductList>
        </div>
        <div className="hotProductPhukien">
          <HotProductList hotProductData={this.state.PhukienData}></HotProductList>
        </div>
        <Sale saleData={this.state.saleData}></Sale>
      </div>
    );
  }
}

export default App;
