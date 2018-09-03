import React from 'react';
import { connect } from 'react-redux';
import { startActivateLocation } from '../actions/locations';
import styles from '../styles/UpButton.css';

export const UpButton = ( { locations, startActivateLocation } ) => {

  const activate = () => { 
    locations.map( ( location, index ) => {
      if( location.active && locations[ index - 1 ] ) {
        startActivateLocation( locations[ index - 1 ].id );
      }
    })  
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