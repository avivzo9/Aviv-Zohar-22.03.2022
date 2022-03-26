import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { weatherForcatsService } from '../../service/weatherForcast.service';
import { loadForcast } from '../../store/actions/forcastActions';
import './Search.scss'

export function Search({ isDarkMode }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [citiesNames, setCitiesNames] = useState([])
    const [isError, setIsError] = useState(false)

    const searchCities = async (searchTerm) => {
        if (!searchTerm || !checkLetters(searchTerm)) return
        const citiesNames = []
        const citiesNamesCheck = []
        setIsError(null)
        const citiesApi = await weatherForcatsService.getCitiesAutoComplete(searchTerm)
        if (!citiesApi?.length) return
        citiesApi.forEach((c) => {
            citiesNames.forEach((obj) => {
                citiesNamesCheck.push(obj.label)
            })
            if (!citiesNamesCheck.includes(c.LocalizedName)) citiesNames.push({ label: c.LocalizedName, id: c.Key })
        })
        setCitiesNames(citiesNames)
    }

    const checkLetters = (value) => {
        const isEnglish = /^[A-Za-z\s]+$/.test(value);
        if (isEnglish || value === '') return true;
        setIsError('English only!')
        return false
    }

    const onSelectCity = (data) => {
        dispatch(loadForcast(data))
        history.push('/')
    }

    return (
        <section className='search-container'>
            <div style={{ maxHeight: isError ? '100%' : 0, maxWidth: isError ? '100%' : 0 }}><h3>English only!</h3></div>
            <Autocomplete
                inputMode='text'
                disablePortal
                id="combo-box-demo"
                options={citiesNames}
                style={{ color: 'black' }}
                sx={{ width: '100%', bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.07)', '& input': { color: 'black' } }}
                onInputChange={(data) => searchCities(data.target.value)}
                onChange={(_, data) => data?.id ? onSelectCity(data) : null}
                renderInput={(params) => <TextField {...params} label="Search cities" />}
            />
        </section>
    )
}