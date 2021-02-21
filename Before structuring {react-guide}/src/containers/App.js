import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import classes from './App.module.css';
import Person from '../components/Person/Person';

class App extends Component {
  state = {
      persons : [
        { id: 'kelly', name:"Dakshak", age:22 },
        { id: 'bree', name:"Yash", age:18 },
        { id: 'kris', name:"Batman", age:28 }
      ],
      showPersons: false
    }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; /*This also makes a copy of array*/
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render(){
    let persons = null;
    let btnClass = [classes.Button];

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                      <Person click={()=> this.deletePersonHandler(index)}
                          name={person.name} age={person.age}
                          // key={person.id}
                          changed={(event) => this.nameChangedHandler(event, person.id)}/>
            </ErrorBoundary>
          })}
        </div>
      );

      btnClass.push(classes.Red)
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1 className={assignedClasses.join(' ')}>Hello there!</h1>
        <button className={btnClass.join(' ')}
                onClick={this.togglePersonsHandler}>
                Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
