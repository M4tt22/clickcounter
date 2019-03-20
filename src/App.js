import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static initialState = {
    a:1,
    b:2,
    c:3
  }

  constructor(props)
  {
    super(props);
    this.state = App.initialState
  }

  reset() {
    this.setState(App.initialState)
  } 

  render() {
    return (
      <div>
        <p>
        a : {this.state.a} <br></br> 
        b : {this.state.b} <br></br> 
        c : {this.state.c} <br></br>
        </p>
        <button onClick={ 
          () => {
            this.setState({
              a:this.state.a + 1,
              b:this.state.b + this.state.a,
              c:this.state.a * this.state.b,
              d:this.state.c - (this.state.b / this.state.a)
            })
          }
        }>click me</button>
        <button onClick={
          () => this.reset()}
        >reset me</button>
      </div>
    );
  }
}

export default App;
