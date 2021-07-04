import React from 'react';
import './Button.css'
function Button({ ...props }) {
    return (
      <div className="btnDiv">
        <button {...props}>
       {props.title}
      </button>
      </div>
    );
  }
  export default Button