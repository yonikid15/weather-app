import React from 'react';
import { connect } from 'react-redux';
import { startActivateLocation } from '../actions/locations';
import { startSlideAnimation } from '../tools/animations';
import styles from '../styles/DownButton.css';

export const DownButton = ( { locations, startActivateLocation } ) => {

  const activate = () => {
    let found = false;

    locations.map( ( location, index ) => {
      if( location.active && locations[ index + 1 ] && !found ) {
        startSlideAnimation({ 
          locations, 
          active: false, 
          id: locations[ index + 1 ].id
        });
        startActivateLocation( locations[ index + 1 ].id );
        found = true;
      }
    })  
  };

  return (
    <button onClick={ activate } className={ styles.downBtn }>
      <i className={`fas fa-caret-down ${ styles.downBtn__icon}`}></i>
    </button>
  );
};

const mapStateToProps = ( state ) => ({
  locations: state.locations
});

const mapDispatchToProps = ( dispatch ) => ({
  startActivateLocation: ( id ) => dispatch( startActivateLocation( id ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( DownButton );