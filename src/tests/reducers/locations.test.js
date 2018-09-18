import locationsReducer from '../../reducers/locations';
import locations from '../fixtures/locations';

test('should setup default state', () => {
  const state = locationsReducer( undefined, {type: '@@INIT'});
  expect( state ).toEqual([]);
});

test('should setup add location reducer', () => {
  const location = {
    id: 4,
    main: {
      temp: 10,
      humidity: 50
    },
    name: 'Montreal',
    sys: {
      country: 'Canada'  
    },
    weather: [
      { description: 'cloudy' }
    ],
    active: true
  };

  const action = {
    type: 'ADD_LOCATION',
    location
  };

  const state = locationsReducer( locations, action );
  expect( state ).toEqual( [...locations, location] );
});

test('should setup error add location reducer', () => {
  const action = {
    type: 'ERROR_ADD_LOCATION'
  };

  const state = locationsReducer( locations, action );
  expect( state ).toEqual( state );
});

test('should setup remove location reducer', () => {
  const action = {
    type: 'REMOVE_LOCATION',
    id: locations[0].id
  };

  const state = locationsReducer( locations, action );
  expect( state ).toEqual( [ locations[1], locations[2] ] );
});

test('should setup remove all locations reducer', () => {
  const action = {
    type: 'REMOVE_ALL_LOCATIONS'
  };

  const state = locationsReducer( locations, action );
  expect( state ).toEqual( [] );
});

test('should setup activate location reducer', () => {
  const action = {
    type: 'ACTIVATE_LOCATION',
    id: locations[1].id
  };

  const state = locationsReducer( locations, action );
  expect( state[0].active ).toEqual( false );
  expect( state[1].active ).toEqual( true );
});

test('should setup refresh location reducer', () => {
  const location = {
    id: 2,
    main: {
      temp: 23,
      humidity: 60
    },
    name: 'Paris',
    sys: {
      country: 'France'  
    },
    weather: [
      { description: 'Tornado' }
    ],
    active: true
  };

  const action = {
    type: 'REFRESH_LOCATION',
    location
  };

  const state = locationsReducer( locations, action );
  expect( state[2] ).toEqual( location );
});

test('should setup error add location reducer', () => {
  const action = {
    type: 'ERROR_REFRESH_LOCATION'
  };

  const state = locationsReducer( locations, action );
  expect( state ).toEqual( state );
});