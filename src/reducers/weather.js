const defaultReducerState = {
  currentWeather: {
      error: undefined
  }
};
/*
  Weather Reducer: carries out state mutation depending on the 
  action type.
*/
export default ( state = defaultReducerState, action ) => {
  switch ( action.type ) {
      case "SET_CURRENT_WEATHER":
          return {
               ...state,
               currentWeather: {
                   city: action.data.city,
                   country: action.data.country,
                   temperature: action.data.temperature,
                   humidity: action.data.humidity,
                   description: action.data.description,
                   error: action.data.error
               }
          };
      case "ERROR_CURRENT_WEATHER": 
          return {
              ...state, 
              currentWeather: {
                  error: action.error
              }
          }
      case "SET_WEEK_FORCAST":
          return {
              ...state,
              weekForcast: {

              }
          }
      default: 
          return state;
  }
};