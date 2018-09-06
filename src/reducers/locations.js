// Locations Reducer
import uuid from 'uuid';

const toronto = {
  id: uuid(),
  temperature: 303,
  city: 'Toronto',
  country: 'Canada',
  humidity: 99,
  condition: 'Sunny',
  active: true
};

const ottawa = {
  id: uuid(),
  temperature: 295,
  city: 'Ottawa',
  country: 'Canada',
  humidity: 97,
  condition: 'Cloudy with a chance of meatballs',
  active: false
};

const montreal = {
  id: uuid(),
  temperature: 285,
  city: 'Montreal',
  country: 'Canada',
  humidity: 90,
  condition: 'Thunder Showers',
  active: false
};

const locationsReducerDefaultState = [
  toronto,
  ottawa,
  montreal
];

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