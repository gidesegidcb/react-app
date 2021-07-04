import React from 'react';
function Alert({...props }) {
    return (
     <div>
        <p {...props}>
        {props.children}
        </p>
     </div>
    );
  }
  export default Alert