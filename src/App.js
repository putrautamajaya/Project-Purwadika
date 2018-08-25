import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

import { Route } from 'react-router-dom';
import HomePage from './components/homePage';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';

class App extends Component {
  render() {
    console.log("render di jalankan");

    return (
      <div className="App">

        <div>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/loginpage" component={ LoginPage }/>
        <Route path="/registerpage" component={ RegisterPage }/>
        </div>
        
        <Header />

      </div>
    );
  }
}

export default App;
