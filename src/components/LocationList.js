import React from 'react';
import { connect } from 'react-redux';
import LocationListItem from './LocationListItem';

export const LocationList = ( props ) =>  {
    return (
      <div>
        {
          props.locations.length === 0 ? (
            <div>
              <span>No Locations.</span>
            </div>
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
      </div>
    );
};

const mapStateToProps = ( state ) => {
  return {
    locations: state.locations
  };
};

export default connect( mapStateToProps )( LocationList );