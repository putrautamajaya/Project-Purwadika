import React, { Component } from 'react';
import "../supports/Header.css";
import burung from "../images/burung.gif";
import cart from "../images/cart.png";
import arrowDown from "../images/arrowDown.png";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onLogOut } from '../actionCreator';


class Header extends Component {

    onLogOutClick = () => {
        this.props.onLogOut();
    }

    render() {
        if (this.props.usersData.username != "") {
            return (
    
                <div className="headerProjek">
                    <Link to="/">
                        <h1 className="logo">GENTLEMEN.</h1>
                    </Link>
                      
                    <img className="burung1" src= {burung}/>
                    <img className="burung2" src= {burung}/>
                    <img className="burung3" src= {burung}/>
                    
                    <input className="searchBar" type="text" placeholder="Search..."/>
        
                    <div className="searchButton">
                        <a href="#"><i className="fa fa-search searchColor"></i></a>
                    </div>
                    
                    <Link to="/loginpage">
                        <div className="loggedIn">Hello, {this.props.usersData.username}</div>
                    </Link>
                    
                    <input type="button" className="daftar" 
                        onClick={this.onLogOutClick} value="Log Out"/>
                    
                    
        
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

        return (
    
        <div className="headerProjek">
            <Link to="/">
                <h1 className="logo">GENTLEMEN.</h1>
            </Link>
              
            <img className="burung1" src= {burung}/>
            <img className="burung2" src= {burung}/>
            <img className="burung3" src= {burung}/>
            
            <input className="searchBar" type="text" placeholder="Search..."/>

            <div className="searchButton">
                <a href="#"><i className="fa fa-search searchColor"></i></a>
            </div>
            
            <Link to="/loginpage">
                <div className="login">Login</div>
            </Link>
            <Link to="/registerpage">
                <div className="daftar">Register</div>
            </Link>
            

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

const mapStateToProps = (state) => {
    const userLogin = state.users;

    return { usersData: userLogin};
}

export default connect(mapStateToProps, { onLogOut })(Header);
