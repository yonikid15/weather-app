import React from 'react';
import styles from '../styles/Condition.css';
import wIcons from '../styles/weather-icons.min.css';

const Condition = ({ condition }) => {
  return (
    <div className={ styles.condition }>
      <h3 className={ styles.condition__title }>
          <i className={`${ wIcons.wi } ${ wIcons[ 'wi-cloudy' ] } ${ styles.condition__icon }`}></i>
          <span>{condition}</span>
      </h3>
    </div>
  );
};

export default Condition;