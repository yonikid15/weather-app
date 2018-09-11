import React from 'react';
import { connect } from 'react-redux';
import WeatherItem from './WeatherItem';
import styles from '../styles/Weather.css';
import wIcons from '../styles/weather-icons.min.css';

export const Weather = ( { locations } ) => {

    let locIndex;
    const active = locations.find( ( location, index ) => {
        locIndex = index;
        return location.active === true;
    });

    const prev = locations[ locIndex - 1 ];
    const next = locations[ locIndex + 1 ];


    return (
        locations.length === 0 ?
            (
                <p className={ styles.noLocation }>
                    <i className={`${ styles.icon } ${ wIcons.wi } ${ wIcons[ 'wi-day-thunderstorm' ] }`}></i>
                    Weather Finder
                </p> 
            )
            
            :

            (
                <div id="weather" className={ styles.weatherLayout }>
                    {/* { prev ? 
                        <WeatherItem prev={ true } { ...prev } /> 
                        : 
                        undefined 
                    } */}

                    <WeatherItem active={ true } { ...active } />

                    {/* { next ? 
                        <WeatherItem next={ true } { ...next } /> 
                        : 
                        undefined 
                    } */}
                </div>
            )  
    );
};
    
const mapStateToProps = ( state ) => ({
    locations: state.locations
})

export default connect( mapStateToProps, undefined )( Weather );