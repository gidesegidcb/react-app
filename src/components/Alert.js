import React from 'react';
function Alert({...props }) {
    return (
      <p {...props}>
       {props.children}
      </p>
    );
  }
  export default Alert