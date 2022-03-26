import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { weatherForcatsService } from '../../service/weatherForcast.service'
import { loadForcast, toggleDarkMode, toggleFahrenheit } from '../../store/actions/forcastActions'
import { Search } from '../Search/Search'
import './AppHeader.scss'

export function AppHeader() {
    const dispatch = useDispatch()
    const isDarkMode = useSelector(state => state.forcastReducer.isDarkMode)
    const isFahrenheit = useSelector(state => state.forcastReducer.isFahrenheit)
    const history = useHistory()

    const loadCurrLocation = () => {
        navigator.geolocation.getCurrentPosition(onCurrLocationSuccess)
        history.push('/')
    }

    const onCurrLocationSuccess = async (res) => {
        const loc = await weatherForcatsService.getCityByGeoloc(res.coords.latitude, res.coords.longitude)
        dispatch(loadForcast(loc))
    }

    return (
        <section className='app-header-container'>
            <h2>Weather Forcast</h2>
            <Link className='link nav-item' to={'/'}><div><FontAwesomeIcon icon="house" /> <h2>Home</h2></div></Link>
            <Link className='link nav-item' to={'/favorites'}><div><FontAwesomeIcon icon="heart" /> <h2>Favorites</h2></div></Link>
            <div className='options-container'>
                <button onClick={() => dispatch(toggleFahrenheit())}>{isFahrenheit ? "F°" : "C°"}</button>
                <button onClick={loadCurrLocation}><FontAwesomeIcon icon="location" /></button>
                <button onClick={() => dispatch(toggleDarkMode())}><FontAwesomeIcon icon={isDarkMode ? "sun" : "moon"} /></button>
            </div>
            <Search isDarkMode={isDarkMode} />
        </section>
    )
}