// Locations Reducer
const locationsReducerDefaultState = [

];

export default ( state = locationsReducerDefaultState, action ) => {
  switch ( action.type ) {
    case 'ADD_LOCATION':
      return [
        ...state,
        action.location
      ];
    case 'ERROR_ADD_LOCATION': 
      return state;
    case 'REMOVE_LOCATION':
      return state.filter( location => location.id !== action.id );
    case 'REMOVE_ALL_LOCATIONS':
      return [];
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
        if( location.id === action.location.id ) {
          return {
            ...action.location
          };
        } else {
          return location;
        }
      });
    case 'ERROR_REFRESH_LOCATION': 
    return state;
    default:
      return state;
  };
};