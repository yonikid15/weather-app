import React from 'react';

const Temperature = ({ temperature }) => {
  return (
    <div>
      <h3>
          <span>Temperature: </span>
          <span>{Math.round(temperature - 274)}&#8451;</span>
      </h3>
    </div>
  );
};

export default Temperature;