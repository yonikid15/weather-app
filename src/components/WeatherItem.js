import React from 'react';
import Place from './Place';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Condition from './Condition';
import styles from '../styles/WeatherItem.css';

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

  const positionStyle = `${ next ? styles.next : "" }${ prev ? styles.prev : "" }${ active ? styles.active : "" }`;

  const setCssId = () => {
      let id =  undefined;

      if( active ) {
        return id = "activeItem";
      } else if( prev ) {
        return id = "prevItem";
      } else if( next ) {
        return id = "nextItem";
      } else {
        return id;
      }
  }

  return (
    <div
      id={ setCssId() }
      className={ `${ styles.weatherItem }` }  
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

// data-active={ active ? id : undefined }
//       data-next={ next ? id : undefined }
//       data-prev={ prev ? id : undefined }
// set id to prev or next or active then animate from there