import React from 'react';
import styles from '../styles/Temperature.css';

const Temperature = ({ temperature }) => {
  return (
    <div className={ styles.temperature }>
      <h3 className={ styles.temperature__title }>
          <i 
            className={ `fas fa-thermometer-half ${ styles.temperature__icon }` }
          >
          </i> 
          <span>
            {Math.round(temperature - 274)}&deg;C
          </span>
      </h3>
    </div>
  );
};

export default Temperature;