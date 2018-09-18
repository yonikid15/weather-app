import React from 'react';
import Place from './Place';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Condition from './Condition';
import styles from '../styles/WeatherItem.css';
import backgroundImage from '../../public/images/nightsky1.jpeg';

const WeatherItem = ({ 
  id, 
  city, 
  country, 
  temperature, 
  humidity, 
  condition, 
  next, 
  prev, 
  active 
}) => {
  return (
    <div
      id={'activeItem'}
      className={ `${ styles.weatherItem }` } 
      style={{ 'backgroundImage' : `url(${ backgroundImage })` }}
      data-id={ id }
    >
      <Place 
        city={ city } 
        country={ country } 
      />
      <Temperature 
        temperature={ temperature }
      />
      <Humidity 
        humidity={ humidity }
      />
      <Condition 
        condition={ condition }
      />
    </div>
  );
};

export default WeatherItem;

