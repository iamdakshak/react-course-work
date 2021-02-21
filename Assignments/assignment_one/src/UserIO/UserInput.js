import React from 'react';

const UserInput = (props) => {
  const inputStyle = {
    border: '5px solid skyblue',
  }
  return(
    <div>
      <input type="text" onChange={props.typed}
             value={props.currentName}
             style={inputStyle}/>
    </div>
  );
}

export default UserInput;
