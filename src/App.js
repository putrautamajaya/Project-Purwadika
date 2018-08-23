import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

import { Route } from 'react-router-dom';
import HomePage from './components/homePage';
import LoginPage from './components/loginPage';

class App extends Component {
  render() {
    console.log("render di jalankan");

    return (
      <div className="App">

        <div>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/loginpage" component={ LoginPage }/>
        {/* <Route path="/movielist" component={ MovieList }/> */}
        </div>
        
        <Header />

      </div>
    );
  }
}

export default App;
