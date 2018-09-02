import React from 'react';

const Humidity = ({ humidity }) => {
  return (
    <div>
      <h3>
          <span>Humidity: </span>
          <span>{humidity}</span>
      </h3>
    </div>
  );
};

export default Humidity;