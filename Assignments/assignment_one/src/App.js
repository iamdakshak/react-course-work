import React, { Component } from 'react';
import UserInput from './UserIO/UserInput';
import UserOutput from './UserIO/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: "Wonder Woman!"
  }
  changeNameHandler = (event) => {
    this.setState({ username: event.target.value });
  }
  render(){
    return (
    <div className="App">
      <UserOutput username={this.state.username}/>
      <UserOutput username={this.state.username}/>
      <UserInput  currentName={this.state.username}
                  typed={this.changeNameHandler}/>
    </div>
  );}
}

export default App;
