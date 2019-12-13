import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <nav >
                <ul >
                    <li className="logo"><a><img src='./img/logo.png'></img></a></li>
                    <li><a href=''>Xu Huớng</a></li>
                    <li><a href=''>HOT</a></li>
                    <li><a href=''>SALE30%</a></li>
                    <li className="more aoThun">
                         <a href=''>Áo thun <i class="fa fa-caret-down"></i></a>
                         <ul className="dropDown aoThun-items">
                            <li><a href="#">Áo Thun MaBư Cá Tính</a></li>
                            <li><a href="#">Áo Thun NoStyle Đơn Giản</a></li>
                            <li><a href="#">Áo Thun KiriMaru Giá Rẻ</a></li>
                            <li><a href="#">Áo Thun Adachi Unisex & Couple</a></li>
                        </ul>
                    </li>
                   
                    <li><a href=''>Áo khoác</a></li>
                    <li><a href=''>Sơ mi</a></li>
                    <li className="more quanDai"><a href=''>Quần Dài <i class="fa fa-caret-down"></i></a>
                    <ul className="dropDown quanDai-items">
                            <li><a href="#">Quần Jean Cá Tính</a></li>
                            <li><a href="#">Quần Jean Đơn Giản</a></li>
                            <li><a href="#">Quần Jogger</a></li>
                            <li><a href="#">Quần Kaki</a></li>
                            <li><a href="#">Quần Tây</a></li>
                        </ul>
                    </li>
                    <li><a href=''>Quần Short</a></li>
                    <li><a href=''>Giày</a></li>
                    <li className="more sandal"><a href=''>Sandal-Dép <i class="fa fa-caret-down"></i></a>
                    <ul className="dropDown sandal-items">
                            <li><a href="#">Sandal Nam</a></li>
                            <li><a href="#">Dép Nam</a></li>
                        </ul>
                    </li>
                    <li className="more balo"><a href=''>Balo-Túi <i class="fa fa-caret-down"></i></a>
                    <ul className="dropDown balo-items">
                            <li><a href="#">Balo Laptop, Du Lịch, Thời Trang</a></li>
                            <li><a href="#">Túi Đeo</a></li>
                        </ul>
                    </li>
                    <li className="more phuKien"><a href=''>PK <i class="fa fa-caret-down"></i></a>
                    <ul className="dropDown phuKien-items">
                            <li><a href="#">Dây Nịt Da</a></li>
                            <li><a href="#">Ví Da</a></li>
                            <li><a href="#">Kính Mát</a></li>
                            <li><a href="#">Nón</a></li>

                        </ul>
                    </li>
                    <li><a href=''>Design</a></li>
                    <li className="sear"><a href=''><i class="fa fa-search "></i></a></li>
                    <li className="cart"><a href=''><i class="fa fa-shopping-cart"></i>0SP</a></li>
                </ul>
                <div className="tempp"></div>
            </nav>
        );
    }
}

export default Navbar;
