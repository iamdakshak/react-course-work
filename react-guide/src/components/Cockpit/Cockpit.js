import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[cockpit.js] useEffect');
    //Http Request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] Cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
    }
  })

  let assignedClasses = [];
  let btnClass = '';
  if(props.showPersons){
    btnClass = classes.Red
  }

  if(props.personsLength <= 2){
    assignedClasses.push(classes.red); //classes = ['red']
  }
  if(props.personsLength <= 1){
    assignedClasses.push(classes.bold); //classes = ['red', 'bold']
  }

  return(
    <div className={classes.Cockpit}>
      <h1 className={assignedClasses.join(' ')}>Hello there!</h1>
      <button ref={toggleBtnRef} className={btnClass}
              onClick={props.clicked}>
              Toggle Persons
      </button>

      <button onClick={authContext.login}>Log in</button>}


    </div>
  );
}

export default React.memo(Cockpit);
