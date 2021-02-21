import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
  const rno = Math.random();
    if(rno > 0.7){
      throw new Error('Something went wrong!');
    }
  return(
    <div className={classes.Person}>
      <p onClick={props.click}> I am {props.name} and I'm { props.age } years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={ props.changed } value={props.name}/>
    </div>
  )
};

export default person;
