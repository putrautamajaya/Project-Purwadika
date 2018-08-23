import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Carousels from './components/Carousel';

class App extends Component {
  render() {
    console.log("render di jalankan");

    return (
      <div className="App">

        <Carousels />
        
        <Header />

        

      </div>
    );
  }
}

export default App;
