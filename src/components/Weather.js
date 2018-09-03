import React from 'react';
import { connect } from 'react-redux';
import WeatherItem from './WeatherItem';
import Place from './Place';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Condition from './Condition';
import styles from '../styles/Weather.css';
import wIcons from '../styles/weather-icons.min.css';

export const Weather = ( { locations } ) => {

    const active = locations.find( location => location.active === true );

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
                <div className={ styles.weatherLayout }>
                    { locations.map( location => {
                        return <WeatherItem>
                                    <Place 
                                        city={location.city} 
                                        country={location.country} 
                                    />
                                    <Temperature 
                                        temperature={location.temperature}
                                    />
                                    <Humidity 
                                        humidity={location.humidity}
                                    />
                                    <Condition 
                                        condition={location.condition}
                                    />
                            </WeatherItem>
                    })}
                </div>
            )  
    );
};
    
const mapStateToProps = ( state ) => ({
    locations: state.locations
})

export default connect( mapStateToProps, undefined )( Weather );