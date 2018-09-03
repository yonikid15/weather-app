import React from 'react';
import { connect } from 'react-redux';
import LocationListItem from './LocationListItem';
import styles from '../styles/LocationList.css';

export const LocationList = ( props ) =>  {
    return (
      <ul className={ styles.listLayout}>
        {
          props.locations.length === 0 ? (
            <li className={ styles.noLocations }>
              <span>No Locations.</span>
            </li>
          ) : (
            props.locations.map( ( location, index ) => {
              return <LocationListItem 
                        key={ location.id } 
                        { ...location } 
                        dispatch={ props.dispatch } 
                        prev={ props.locations[index-1]} 
                        next={props.locations[index+1]}
                      />
            })
          )
        }
      </ul>
    );
};

const mapStateToProps = ( state ) => {
  return {
    locations: state.locations
  };
};

export default connect( mapStateToProps )( LocationList );