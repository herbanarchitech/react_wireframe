//import logo from './logo.svg';
import React, { Component } from 'react';
import Vbar from "./Vbar";
import Hbar from "./Hbar";
import Bttm from "./Bttm";
import "./App.css";

export default class App extends Component {
render() {
  return (
    
    <div className="App">
      <div id="container">
    
      <Vbar/>
      <Hbar/>
      <Bttm/>

      </div>
     
     
    </div>



  );
}
}

