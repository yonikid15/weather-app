import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addLocation, startAddLocation, removeLocation, removeAllLocations, activateLocation, refreshLocation, startRefreshLocation } from '../../actions/locations';
import fetchMock from 'fetch-mock';
import locations from '../fixtures/locations';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('should setup add location action object with provided values', () => {
  const action = addLocation( locations[0] );
  expect( action ).toEqual({
    type: 'ADD_LOCATION',
    location: locations[0]
  });
});

test('should setup remove location action object with provided values', () => {
  const action = removeLocation( locations[1].id );
  expect( action ).toEqual({
    type: 'REMOVE_LOCATION',
    id: locations[1].id
  });
});

test('should setup remove all locations action object with provided values', () => {
  const action = removeAllLocations();
  expect( action ).toEqual({
    type: 'REMOVE_ALL_LOCATIONS'
  });
});

test('should setup activate location action object with provided values', () => {
  const action = activateLocation( locations[2].id );
  expect( action ).toEqual({
    type: 'ACTIVATE_LOCATION',
    id: locations[2].id
  });
});

test('should setup refresh location action object with provided values', () => {
  const action = refreshLocation( locations[0] );
  expect( action ).toEqual({
    type: 'REFRESH_LOCATION',
    location: locations[0]
  });
});

describe('async actions', () => {

  let city, country, data, location;

  beforeEach(() => {
    city = 'Ottawa';
    country = 'CA';
    data = locations[0];
    location = {
      id: data.id,
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      condition: data.weather[0].description,
      active: true
    }
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('should fetch location data and dispatch add location action', () => {  
    fetchMock.get('*', { ...locations[0] });
  
    const expectedActions = [
      {
        type: 'ADD_LOCATION',
        location
      },
      {
        type: 'ACTIVATE_LOCATION',
        id: location.id
      }
    ];
  
    const store = mockStore({ locations: [] });
  
    return store.dispatch( startAddLocation({ city, country }) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions );
    });
  });

  test('should fetch location data and dispatch refresh location action', () => {  
    fetchMock.get('*', { ...locations[0] });
  
    const expectedActions = [
      {
        type: 'REFRESH_LOCATION',
        location
      },
      {
        type: 'ACTIVATE_LOCATION',
        id: location.id
      }
    ];
  
    const store = mockStore({ locations: [] });
  
    return store.dispatch( startRefreshLocation({ city, country }) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions );
    });
  });

});