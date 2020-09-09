import React from 'react';

const UserInput = (props) => {

  
  
  return (
    
    <div className="UserInput">
      <label>Change the displayed Username here:  </label>
      <input type="text" onChange={props.changed} value={props.username}/>
    </div>

  )
}

export default UserInput;