import React from 'react';

const validation = (props) => {
  let output = 'Text too short';

  if (props.strLength > 5) {
    output = 'Text long enough';
  }

  return(
    <div>
      <p>{output}</p>
    </div>
  );
};

export default validation;