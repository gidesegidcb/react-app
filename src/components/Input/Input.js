import React from 'react';
import './Input.css'
function Input({type,placeholder, ...props }) {
    return (
      <div className="inputDiv">
        <input type={type} {...props} placeholder={placeholder}/>
      </div>
    );
  }
  export default Input