import React from 'react';
import { connect } from 'react-redux';
import Place from './Place';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Condition from './Condition';
import styles from '../styles/Weather.css';

export const Weather = ( { locations } ) => {

    const active = locations.find( location => location.active === true );

    return (
 
            
                active ?

                (
                    <div className={ styles.weather }>
                        <Place 
                            city={active.city} 
                            country={active.country} 
                        />
                        <Temperature 
                            temperature={active.temperature}
                        />
                        <Humidity 
                            humidity={active.humidity}
                        />
                        <Condition 
                            condition={active.condition}
                        />
                    </div>
                ) :

                <p className={ styles.weather }>Add a Location.</p>
            
   
        
    );
};
    
const mapStateToProps = ( state ) => ({
    locations: state.locations
})

export default connect( mapStateToProps, undefined )( Weather );