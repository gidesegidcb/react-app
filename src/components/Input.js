import React from 'react';
function Input({placeholder, ...props }) {
    return (
      <input type="text" {...props} placeholder={placeholder}/>
    );
  }
  export default Input