import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loadForcast } from '../../store/actions/forcastActions'

import './FavoritePreview.scss'

export function FavoritePreview({ favorite, currForcast }) {
    const dispatch = useDispatch()
    const isFahrenheit = useSelector(state => state.forcastReducer.isFahrenheit)
    const history = useHistory()

    const floorTemp = (temp) => Math.floor(temp)

    const sendToforcast = () => {
        dispatch(loadForcast({ label: favorite.cityName, id: favorite.locId }))
        history.push('/')
    }

    if (!currForcast) return (<div><h2>Loading...</h2></div>)

    return (
        <li className='favorite-preview' onClick={sendToforcast}>
            <p>{favorite.cityName}</p>
            <img src={`https://developer.accuweather.com/sites/default/files/${currForcast.WeatherIcon < 10 ? `0${currForcast.WeatherIcon}` : currForcast.WeatherIcon}-s.png`} />
            <p>{currForcast.WeatherText}</p>
            {isFahrenheit && <p>{floorTemp(currForcast.Temperature.Imperial.Value)}° F</p>}
            {!isFahrenheit && <p>{floorTemp(currForcast.Temperature.Metric.Value)}° C</p>}
        </li>
    )
}