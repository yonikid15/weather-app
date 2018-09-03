import React from 'react';
import { connect } from 'react-redux';
import { startRemoveLocation, startActivateLocation } from '../actions/locations';
import styles from '../styles/LocationListItem.css';

export class LocationsListItem extends React.Component {

  /* 
    When user clicks remove button:
      - First activate either the location previous in the array, if first in the list then activate the next location.
      - Then remove the location from the list
  */
  remove = () => {
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
    this.props.startActivateLocation( this.props.id );
  }

  render() {
    const { city, country } = this.props;
    return (
      <li onClick={ this.activate } className={ styles.listItem }>
        <img className={ styles.listItem__img } src="https://via.placeholder.com/60x60"/>
        <div className={ styles.listItem__titles }>
          <h4 className={ styles.listItem__city }>{ city }</h4>
          <h5 className={ styles.listItem__country }>{ country }</h5>
        </div>
        <button className={ styles.listItem__btn } onClick={ this.remove }><i className={ 'fas fa-times-circle' }></i></button>
      </li>
    );
  };
};

const mapDispatchToProps = ( dispatch ) => ({
  startRemoveLocation: ( id ) => dispatch( startRemoveLocation( id ) ),
  startActivateLocation: ( id ) => dispatch( startActivateLocation( id ) )
});

export default connect( undefined, mapDispatchToProps )( LocationsListItem );