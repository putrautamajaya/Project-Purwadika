import React, { Component } from 'react';
import '../supports/carousel.css';
import imgCarousel1 from '../images/imgCarousel1.jpg';
import imgCarousel2 from '../images/imgCarousel2.jpg';
import imgCarousel3 from '../images/imgCarousel3.jpg';



class carousels extends Component {

    render() {
        return (
            <div className="carousel">
                <ul>
                    <li>
                        <div className="carousel-container">
                                <img src= { imgCarousel1 } alt="" />
                        </div>
                    </li>

                    <li>
                        <div className="carousel-container">
                            <img src= { imgCarousel2 } alt="" />
                        </div>
                    </li>

                    <li>
                        <div className="carousel-container">
                            <img src= { imgCarousel3 } alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default carousels;