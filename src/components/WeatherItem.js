import React from 'react';
import styles from '../styles/WeatherItem.css';

const WeatherItem = ({ children }) => {
  return (
    <div className={ styles.weatherItem }>
      {children}
    </div>
  );
};

export default WeatherItem;
