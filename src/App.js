import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

import { Route } from 'react-router-dom';
import HomePage from './components/homePage';

class App extends Component {
  render() {
    console.log("render di jalankan");

    return (
      <div className="App">

        <div>
        <Route exact path="/" component={ HomePage }/>
        {/* <Route path="/albumlist" component={ AlbumList }/>
        <Route path="/movielist" component={ MovieList }/> */}
        </div>
        
        <Header />

      </div>
    );
  }
}

export default App;
