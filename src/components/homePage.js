import React, { Component } from 'react';
import Carousels from './Carousel';
import NewArrival from './newArrival';

class homePage extends Component {
    render() {
        return(
            <div>
                <Carousels />
                <NewArrival />
            </div>
        );
    }
}

export default homePage;