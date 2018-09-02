import React from 'react';

const Condition = ({ condition }) => {
  return (
    <div>
      <h3>
          <span>Condition: </span>
          <span>{condition}</span>
      </h3>
    </div>
  );
};

export default Condition;