import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/DownButton.css';

const DownButton = () => {

  const activate = () => { 
    locations.map( ( location, index ) => {
      if( location.active && locations[ index + 1 ] ) {
        startActivateLocation( locations[ index + 1 ].id );
      }
    })  
  };

  return (
    <button onClick={ activate } className={ styles.downBtn }>
      <i className={`fas fa-caret-up ${ styles.downBtn__icon}`}></i>
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