import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person.js';

const StyledButton = styled.button`
    background-color: ${ props => props.alt ? 'red' : 'green' };
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${ props => props.alt ? 'salmon' : 'lightgreen' };
      color: black;
    }
`;

class App extends Component {
  state = {
      persons : [
        { id: 'kelly', name:"Dakshak", age:22 },
        { id: 'bree', name:"Yash", age:18 },
        { id: 'kris', name:"Batman", age:28 }
      ],
      showPersons: false
    }
  // switchNameHandler = (newName) => {
  //   // console.log("Button clicked!");
  //   //DON'T DO THIS : this.state.persons[0].name = "Dakshak";
  //   this.setState({
  //     persons : [
  //       { name:newName, age:23 },
  //       { name:"Scarlet", age:18 },
  //       { name:"Batman", age:32 }
  //     ]
  //   });
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    /*Alternatively, can use
    const person = Object.assign({}, this.state.persons[personIndex]);*/
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    /*const persons = this.state.persons.slice();
    can be used as it makes a copy of array and you
    can use this new array for performing operations
    without altering teh actual obj/array */
    const persons = [...this.state.persons]; /*This also makes a copy of array*/
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render(){
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={()=> this.deletePersonHandler(index)}
                name={person.name} age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style.color = 'white';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Hello there!</h1>
        <StyledButton /*style={style}*/
                alt={this.state.showPersons}
                onClick={this.togglePersonsHandler}>
                Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;

// switchNameHandler = () => {
//   // console.log("Button clicked!");
//   //DON'T DO THIS : this.state.persons[0].name = "Dakshak";
//   this.setState({
//     persons : [
//       { name:"Dakshak", age:23 },
//       { name:"Scarlet", age:18 },
//       { name:"Batman", age:28 }
//     ]
//   })
// }
