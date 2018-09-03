import React from 'react';
import styles from '../styles/Humidity.css';

const Humidity = ({ humidity }) => {
  return (
    <div className={ styles.humidity }>
      <h3 className={ styles.humidity__title }>
          <i className={ `fas fa-tint ${ styles.humidity__icon }` }></i>
          <span>{humidity}</span>
      </h3>
    </div>
  );
};

export default Humidity;