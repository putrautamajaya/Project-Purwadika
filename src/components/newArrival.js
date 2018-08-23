import React, { Component } from 'react';
import '../supports/newArrival.css';
import image1 from '../images/bottom1.jpg';
import image2 from '../images/bottom2.jpg';
import image3 from '../images/bottom3.jpg';
import image4 from '../images/bottom4.jpg';
import image5 from '../images/bottom5.jpg';
import image6 from '../images/bottom6.jpg';
import image7 from '../images/bottom7.jpg';
import image8 from '../images/bottom8.jpg';

class newArrival extends Component {
    render() {
        return (
            <div className="newArrival">

                <h2 className="newArrivalText">New Arrival</h2>
                <hr className="line" />

                <div className="newArrivalGridDisplay">
                        <div className="newArrivalBox">
                            <img className="imageBox" src={ image1 } alt=""/>
                            <p>Nama Item</p>
                            <p>Nama Toko</p>
                            <p>Harga: 50.000</p>
                        </div>

                        <div className="newArrivalBox">
                            <img className="imageBox" src={ image2 } alt=""/>
                            <p>Nama Item</p>
                            <p>Nama Toko</p>
                            <p>Harga: 50.000</p>
                        </div>
                        <div className="newArrivalBox">
                            <img className="imageBox"  src={ image3 } alt=""/>
                            <p>Nama Item</p>
                            <p>Nama Toko</p>
                            <p>Harga: 50.000</p>
                        </div>
                        <div className="newArrivalBox">
                            <img className="imageBox"  src={ image4 } alt=""/>
                            <p>Nama Item</p>
                            <p>Nama Toko</p>
                            <p>Harga: 50.000</p>
                        </div>
                        <div className="newArrivalBox">
                            <img className="imageBox"  src={ image5 } alt=""/>
                            <p>Nama Item</p>
                            <p>Nama Toko</p>
                            <p>Harga: 50.000</p>
                        </div>
                        <div className="newArrivalBox">
                            <img className="imageBox"  src={ image6 } alt=""/>
                            <p>Nama Item</p>
                            <p>Nama Toko</p>
                            <p>Harga: 50.000</p>
                        </div>
                        <div className="newArrivalBox">
                            <img className="imageBox"  src={ image7 } alt=""/>
                            <p>Nama Item</p>
                            <p>Nama Toko</p>
                            <p>Harga: 50.000</p>
                        </div>
                        <div className="newArrivalBox">
                            <img className="imageBox"  src={ image8 } alt=""/>
                            <p>Nama Item</p>
                            <p>Nama Toko</p>
                            <p>Harga: 50.000</p>
                        </div>
                </div>

            </div>
        );
    }
}

export default newArrival;