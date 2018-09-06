import React from 'react';
import { countries } from 'country-data';
import styles from '../styles/Place.css';

const Place = ({ city, country }) => {
  return (
    <div className={ styles.place }> 
      <h3 className={ styles.place__city }>
        <span>{city}</span>
      </h3>
      <h5 className={ styles.place__country }>
        { countries[ country ].name }
      </h5>
    </div>
  );
};

export default Place;