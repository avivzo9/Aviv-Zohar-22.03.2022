import { weatherForcatsService } from "../../service/weatherForcast.service"

export function loadLocation(city) {
  return async dispatch => {
    const location = await weatherForcatsService.getCitiesAutoComplete(city)
    const action = { type: 'SET_LOCATION', location }
    await dispatch(action)
  }
}
export function loadForcast(loc) {
  return async dispatch => {
    const forcast = await weatherForcatsService.getForcast(loc?.id)
    const currForcast = await weatherForcatsService.getCurrentForcast(loc?.id)
    const details = loc ? loc : { label: 'Tel Aviv', id: '215854' }
    await dispatch({ type: 'SET_DETAILS', details })
    await dispatch({ type: 'SET_FORCAST', forcast, currForcast })
  }
}
export function loadCurrForcasts(cities) {
  return async dispatch => {
    const forcasts = await weatherForcatsService.getCurrentForcasts(cities)
    await dispatch({ type: 'SET_FAVORITES_CURR_FORCASTS', forcasts })
  }
}
export function toggleDarkMode() {
  return async dispatch => {
    await dispatch({ type: 'TOGGLE_DARK_MODE' })
  }
}
export function toggleFahrenheit() {
  return async dispatch => {
    await dispatch({ type: 'TOGGLE_FAHRENHEIT' })
  }
}