
/*
    Action generator for setting current weather
*/
export const setCurrentWeather = ( data ) => ({
  type: "SET_CURRENT_WEATHER",
  data
});

/*
  Action generator for errors
*/
export const errorCurrentWeather = ( error ) => ({
  type: "ERROR_CURRENT_WEATHER",
  error
})


/* 
  This method grabs the weather data needed to display on the screen,
  it uses "async await" ( a simple syntax for making promises )
*/
export const startSetCurrentWeather = ( city, country ) => {

  return async ( dispatch ) => {
      const apiCall = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.OPEN_MAP_WEATHER_API_KEY}`
      );

      try {
          const apiData = await apiCall.json();
          console.log(apiData);
          const weatherData = {
              temperature: apiData.main.temp,
              city: apiData.name,
              country: apiData.sys.country,
              humidity: apiData.main.humidity,
              description: apiData.weather[0].description,
              error: undefined
          };

          dispatch( setCurrentWeather( weatherData ) );
      } catch ( err ) {
          const error = err.message;
          console.log(err);
          dispatch( errorCurrentWeather( error ) );
      }
  }
}