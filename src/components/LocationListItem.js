import React from 'react';
import { connect } from 'react-redux';
import { startRemoveLocation, startActivateLocation } from '../actions/locations';

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

  render() {
    const { city, country } = this.props;
    return (
      <div>
        {/* img here */}
        <h4>{ city }</h4>
        <h5>{ country }</h5>
        <button onClick={ this.remove }>Remove</button>
      </div>
    );
  };
};

const mapDispatchToProps = ( dispatch ) => ({
  startRemoveLocation: ( id ) => dispatch( startRemoveLocation( id ) ),
  startActivateLocation: ( id ) => dispatch( startActivateLocation( id ) )
});

export default connect( undefined, mapDispatchToProps )( LocationsListItem );