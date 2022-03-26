const INITIAL_STATE = {
  currCity: {
    cityName: null,
    locId: null,
    forcast: null,
    currForcast: null
  },
  isDarkMode: false,
  isFahrenheit: false
}

export function forcastReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_DETAILS':
      return {
        ...state,
        currCity: {
          ...state.currCity,
          cityName: action.details.label,
          locId: action.details.id
        },
      }
    case 'SET_FORCAST':
      return {
        ...state,
        currCity: {
          ...state.currCity,
          forcast: action.forcast,
          currForcast: action.currForcast
        },
      }
    case 'SET_CURR_FORCAST':
      return {
        ...state,
        currCity: {
          ...state.currCity,
          currForcast: action.currForcast
        },
      }
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      }
    case 'TOGGLE_FAHRENHEIT':
      return {
        ...state,
        isFahrenheit: !state.isFahrenheit
      }
    default:
      return state
  }
}