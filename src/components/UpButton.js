import React from 'react';
import { connect } from 'react-redux';
import { startActivateLocation } from '../actions/locations';
import { startSlideAnimation, shake } from '../tools/animations';
import styles from '../styles/UpButton.css';

export const UpButton = ( { locations, startActivateLocation } ) => {

  const activate = () => { 
    let found = false;

    locations.map( ( location, index ) => {
      if( location.active && locations[ index - 1 ] && !found ) {
        startSlideAnimation({ 
            locations, 
            active: false, 
            id: locations[ index - 1 ].id
        });
        startActivateLocation( locations[ index - 1 ].id );
        found = true;
      }
    })
    
    if( !found ) {
      shake();
    }
    
  };

  return (
    <button onClick={ activate } className={ styles.upBtn }>
      <i className={`fas fa-caret-up ${ styles.upBtn__icon}`}></i>
    </button>
  );
};

const mapStateToProps = ( state ) => ({
  locations: state.locations
});

const mapDispatchToProps = ( dispatch ) => ({
  startActivateLocation: ( id ) => dispatch( startActivateLocation( id ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( UpButton );