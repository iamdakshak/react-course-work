import React, { Component } from 'react';
import Validation from './Components/Validation';
import Char from './Components/Char';
import './App.css';

class App extends Component{
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split(''); //Copies as array
    text.splice(index, 1);
    const updateText = text.join('');
    this.setState({userInput: updateText});
  }

  render(){
    let charList = this.state.userInput.split('').map((char, index) => {
      return <Char character={char} key={index}
        clicked={() => this.deleteCharHandler(index)}/>
    });
    return (
      <div className="App">
        <input type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        { charList }
      </div>
    );
  }
}

export default App;
