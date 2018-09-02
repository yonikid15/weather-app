import uuid from 'uuid';

// ADD_LOCATION

export const addLocation = ( location ) => ({
  type: 'ADD_LOCATION',
  location
});

export const startAddLocation = ( location = {} ) => {
  const { 
    city, 
    country 
  } = location;

  return ( dispatch ) => {
      const apiCall = fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.OPEN_MAP_WEATHER_API_KEY}`
      ).then( res => {

        // Status: 200 OK
        const apiData = res.json();

        // Get data from Response
        return apiData.then( data => {
          console.log( data );
          const locationData = {
              id: uuid(),
              temperature: data.main.temp,
              city: data.name,
              country: data.sys.country,
              humidity: data.main.humidity,
              condition: data.weather[0].description,
              active: true
          };

          dispatch( addLocation( locationData ) );  
        });

      }).catch( err => {
        console.log( err );
      });
  };
};

// REMOVE_LOCATION

export const removeLocation = ( id ) => ({
  type: 'REMOVE_LOCATION',
  id
});

export const startRemoveLocation = ( id ) => {
  return (dispatch) => {
    dispatch( removeLocation( id ) );
  }
};

// ACTIVATE_LOCATION

export const activateLocation = ( id ) => ({
  type: 'ACTIVATE_LOCATION',
  id
});

export const startActivateLocation = ( id ) => {
  return (dispatch) => {
    dispatch( activateLocation( id ) );
  }
};