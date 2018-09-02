import React from 'react';

const Place = ({ city, country }) => {
  return (
    <div>
      <h3>
          <span>Location: </span> 
          <span>{city}, {country}</span>
      </h3>
    </div>
  );
};

export default Place;