import React, { Component } from 'react';
import "../supports/Header.css";
import burung from "../images/burung.gif";
import cart from "../images/cart.png";
import arrowDown from "../images/arrowDown.png";


class Header extends Component {

    render() {
        return (
    
        <div className="headerProjek">
            <a href="#"><h1 className="logo">GENTLEMEN.</h1></a>
              
            <img className="burung1" src= {burung}/>
            <img className="burung2" src= {burung}/>
            <img className="burung3" src= {burung}/>
            
            <input className="searchBar" type="text" placeholder="Search..."/>

            <div className="searchButton">
                <a href="#"><i className="fa fa-search searchColor"></i></a>
            </div>

            <a href="#"><div className="login">Login</div></a>
            <a href="#"><div className="daftar">Daftar</div></a>

            <a href="#"><img className="cart" src={cart}/></a>

            <div className="navBarHide">
                <a href="#"><img className="dropDownIcon" src={arrowDown}/></a>
            <div className="navBar">
                <div id="displayGrid">
                    <div className="dropdown category"><span>Category</span>
                        <div className="dropdown-content">
                            <div className="categoryContent">
                                <a className="isiContent" href="#">T-Shirt</a>
                                <a className="isiContent" href="#">Sneaker</a>
                                <a className="isiContent" href="#">Jacket</a>
                                <a className="isiContent" href="#">Chino pant</a>
                                <a className="isiContent" href="#">Polo Shirt</a>
                                <a className="isiContent" href="#">Blazer</a>
                                <a className="isiContent" href="#">Over Coat</a>
                                <a className="isiContent" href="#">Dress Shoes</a>
                                <a className="isiContent" href="#">Belt</a>
                                <a className="isiContent" href="#">Sun Glasses</a>
                            </div>  
                        </div>
                    </div> 
                    <div className="sisaNav"></div>    
                </div>
            </div>
            </div>
            
        </div>
        );
    }
}

export default Header;