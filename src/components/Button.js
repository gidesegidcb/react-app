import React from 'react';
function Button({ ...props }) {
    return (
      <button {...props}>
       {props.title}
      </button>
    );
  }
  export default Button