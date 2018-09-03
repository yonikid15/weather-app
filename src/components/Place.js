import React from 'react';
import styles from '../styles/Place.css';

const Place = ({ city, country }) => {
  return (
    <div className={ styles.place }> 
      <h3 className={ styles.place__city }>
        <i className={ `fas fa-location-arrow ${ styles.place__icon }` }></i>
        <span> {city}</span>
      </h3>
      <h5 className={ styles.place__country }>
        Canada
      </h5>
    </div>
  );
};

export default Place;