import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return(
    <div className="UserOutput">
      <p> Username : {props.username}</p>
      <p> I hope to be over-written!</p>
    </div>
  );
}

export default UserOutput;
