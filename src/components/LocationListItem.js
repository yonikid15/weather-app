import React from 'react';
import { connect } from 'react-redux';
import { startRemoveLocation, startActivateLocation, startRefreshLocation } from '../actions/locations';
import { startSlideAnimation } from '../tools/animations';
import styles from '../styles/LocationListItem.css';

export class LocationsListItem extends React.Component {

  /* 
    When user clicks remove button:
      - First activate either the location previous in the array, if first in the list then activate the next location.
      - Then remove the location from the list
  */
  remove = ( event ) => {
    event.stopPropagation();
    const { prev, next, id, active } = this.props;

    if( active ) {
      if( prev ) {
        this.props.startActivateLocation( prev.id );
      }  
      
      if( next ) {
        this.props.startActivateLocation( next.id );
      }
    }
   
    this.props.startRemoveLocation( id ); 

  }

  /* 
    Activate Location when user clicks on Component.
  */
  activate = () => {
    startSlideAnimation( this.props );
    this.props.startActivateLocation( this.props.id );
  }

  /*
    Refresh data on location
  */
  refresh = () => {
    const location = { 
      city: this.props.city,
      country: this.props.country
    };

    this.props.startRefreshLocation( this.props.id, location );
  }

  render() {
    const { city, country, active } = this.props;
    return (
      <li onClick={ this.activate } className={`${ styles.listItem } ${ active ? styles.highlight : undefined }`}>
        <img className={ styles.listItem__img } src="https://via.placeholder.com/60x60"/>
        <div className={ styles.listItem__titles }>
          <h4 className={ styles.listItem__city }>{ city }</h4>
          <h5 className={ styles.listItem__country }>{ country }</h5>
        </div>
        <div className={ styles.listItem__buttons }>
          <button className={ styles.listItem__btn } onClick={ this.remove }><i className={ 'fas fa-times-circle' }></i></button>
          <button className={ styles.listItem__btn } onClick={ this.refresh }><i className={ 'fas fa-redo' }></i></button>
        </div>
      </li>
    );
  };
};

const mapStateToProps = ( state ) => ({
  locations: state.locations
});

const mapDispatchToProps = ( dispatch ) => ({
  startRemoveLocation: ( id ) => dispatch( startRemoveLocation( id ) ),
  startActivateLocation: ( id ) => dispatch( startActivateLocation( id ) ),
  startRefreshLocation: ( id, location ) => dispatch( startRefreshLocation( id, location ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( LocationsListItem );