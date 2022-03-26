import { useEffect, useState } from 'react';
import './DayPreview.scss'

export function DayPreview({ day, isFahrenheit }) {
    const [dayInWeek, setDayInWeek] = useState('')
    const [dateInWeek, setDateInWeek] = useState('')

    useEffect(() => {
        const date = new Date(day.EpochDate * 1000)
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        setDayInWeek(days[(date.getDay() + 1) >= days.length ? 0 : (date.getDay() + 1)])
        setDateInWeek(`${date.getDate() + 1}/${date.getMonth() + 1}`)
    }, [])

    const fahrenheitToCelsius = (temp) => isFahrenheit ? Math.floor(temp) : Math.floor((temp - 32) * 5 / 9)

    return (
        <div className='day-preview'>
            <h3>{dayInWeek} {dateInWeek}</h3>
            <img src={`https://developer.accuweather.com/sites/default/files/${day.Day.Icon < 10 ? `0${day.Day.Icon}` : day.Day.Icon}-s.png`} />
            {day.Day.HasPrecipitation && <p>{day.Day.PrecipitationIntensity} {day.Day.PrecipitationType.toLowerCase()}</p>}
            {!day.Day.HasPrecipitation && <p>{day.Day.IconPhrase}</p>}
            <h3>{fahrenheitToCelsius(day.Temperature.Minimum.Value)}° {isFahrenheit ? 'F' : 'C'} - {fahrenheitToCelsius(day.Temperature.Maximum.Value)}° {isFahrenheit ? 'F' : 'C'}</h3>
        </div>
    )
}
