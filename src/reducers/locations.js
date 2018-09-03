// Locations Reducer

const locationsReducerDefaultState = [];

export default ( state = locationsReducerDefaultState, action ) => {
  switch ( action.type ) {
    case 'ADD_LOCATION':
      return [
        ...deactivate( state ),
        action.location
      ];
    case 'REMOVE_LOCATION':
      return state.filter( location => location.id !== action.id );
    case 'ACTIVATE_LOCATION':
      return state.map( location => {
        if( location.active === true ) {
          location.active = false;
        }

        if( location.id === action.id ) {
          location.active = true;
        }

        return location;
      });
    case 'REFRESH_LOCATION':
      return state.map( location => {
        if( location.id === action.id ) {
          return {
            ...action.location
          };
        } else {
          return location;
        }
      });
    default:
      return state;
  };
};


const deactivate = ( state ) => {
  return state.map( location => {
    if( location.active === true ) {
      location.active = false;
    }
    return location;
  });
};

const activate = ( state ) => {
  return state.map( location => {
    if( location.active === true ) {
      location.active = false;
    }
    return location;
  });
}