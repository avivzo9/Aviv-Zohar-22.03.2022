import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/actions/favoritesActions';
import { weatherForcatsService } from '../../service/weatherForcast.service';
import { useEffect, useState } from 'react';
import { loadForcast } from '../../store/actions/forcastActions';
import { DayPreview } from '../../cmps/DayPreview/DayPreview';

import './Forcast.scss'

export function Forcast() {
    const dispatch = useDispatch()
    const isFahrenheit = useSelector(state => state.forcastReducer.isFahrenheit)
    const currCity = useSelector(state => state.forcastReducer.currCity)
    const isDarkMode = useSelector(state => state.forcastReducer.isDarkMode)
    const favorites = useSelector(state => state.favoritesReducer.favorites)
    const { forcast, currForcast, cityName } = currCity

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        if (!currCity.cityName) navigator.geolocation.getCurrentPosition(onCurrLocationSuccess, onCurrLocationFailed)
        const isFavorite = favorites.find((fav) => fav.locId === currCity.locId)
        isFavorite ? setIsFavorite(true) : setIsFavorite(false)
    }, [currCity])

    const onCurrLocationSuccess = async (res) => {
        const loc = await weatherForcatsService.getCityByGeoloc(res.coords.latitude, res.coords.longitude)
        dispatch(loadForcast(loc))
    }

    const onCurrLocationFailed = () => dispatch(loadForcast())

    const floorTemp = (temp) => Math.floor(temp)

    const onRemoveFavorite = async () => {
        const favoriteToRemove = favorites.find((fav) => fav.locId === currCity.locId)
        dispatch(removeFavorite(favoriteToRemove._id))
        setIsFavorite(false)
    }

    const onAddFavorite = async () => {
        const favoriteToAdd = weatherForcatsService.getEmptyCity()
        favoriteToAdd.cityName = currCity.cityName
        favoriteToAdd.locId = currCity.locId
        dispatch(addFavorite(favoriteToAdd))
        setIsFavorite(true)
    }

    const todayDate = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date(Date.now())
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }

    const backgroundImage = () => {
        if (!currCity.currForcast.HasPrecipitation && isDarkMode) return 'dark-sunny-bgi'
        else if (currCity.currForcast.HasPrecipitation) return 'rain-bgi'
        else return 'sunny-bgi'
    }

    if (!currCity?.currForcast) return (<div><h2>Loading Forcast...</h2></div>)

    return (
        <section className={`forcast-container ${backgroundImage()}`}>
            <div className='forcast-header'>
                <div>
                    <div>
                        <h1>{cityName}</h1>
                        {isFavorite && <button onClick={() => onRemoveFavorite()}><FavoriteIcon sx={{ color: 'red' }} /></button>}
                        {!isFavorite && <button onClick={() => onAddFavorite()}><FavoriteBorderIcon /></button>}
                    </div>
                    <p>{todayDate()}</p>
                    <div>
                        <img src={`https://developer.accuweather.com/sites/default/files/${currForcast.WeatherIcon < 10 ? `0${currForcast.WeatherIcon}` : currForcast.WeatherIcon}-s.png`} />
                        <h3>{currForcast.WeatherText === "Rain" ? currForcast.WeatherText + 'ing' : currForcast.WeatherText}</h3>
                    </div>
                </div>
                <div>
                    {isFahrenheit && <p>{floorTemp(currForcast.Temperature.Imperial.Value)}°</p>}
                    {!isFahrenheit && <p>{floorTemp(currForcast.Temperature.Metric.Value)}°</p>}
                </div>
            </div>
            <div className='days-list hide-overflow'>
                <div>
                    {forcast.map((day, idx) => <DayPreview isFahrenheit={isFahrenheit} key={idx} day={day} />)}
                </div>
            </div>
        </section>
    )
}