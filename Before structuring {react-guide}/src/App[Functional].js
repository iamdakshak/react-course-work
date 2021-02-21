import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
      persons : [
        { name:"Dakshak", age:23 },
        { name:"Yash", age:18 },
        { name:"Batman", age:28 }
      ]
    }
  );
  const [otherState, setOtherState] = useState("Some other state ");
  const switchNameHandler = () => {
    // console.log("Button clicked!");
    //DON'T DO THIS : this.state.persons[0].name = "Dakshak";
    setPersonsState({
      persons : [
        { name:"Dakshak", age:23 },
        { name:"Scarlet", age:18 },
        { name:"Batman", age:28 }
      ]
    });
  }
  return (
    <div className="App">
      <h1>Hello there!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name = {personsState.persons[0].name} age ={personsState.persons[0].age} />
      <Person name = {personsState.persons[1].name} age ={personsState.persons[1].age}>My hobby : Swimming </Person>
      <Person name = {personsState.persons[2].name} age ={personsState.persons[2].age}/>
    </div>
  );
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
