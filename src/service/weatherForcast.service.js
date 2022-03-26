import axios from "axios"
import { storageService } from "./async-storage.service"

const API_KEY = '	Xbcijy9vu8XqmafY2DFOWdh2dfjUdRgK'

export const weatherForcatsService = {
    getCitiesAutoComplete,
    getForcast,
    getCurrentForcast,
    getEmptyCity,
    getCurrentForcasts,
    getCityByGeoloc
}

async function getCitiesAutoComplete(city = 'Tel Aviv') {
    try {
        const storage = await storageService.query(`citiesResults_${city}`)
        if (storage?.length) return storage;
        console.log('getLocation api!');
        const cities = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`)
        if (!cities.data?.length) storageService.postMany(`citiesResults_${city}`, cities.data)
        return cities.data;
    } catch (err) {
        console.log('Error in getCitiesAutoComplete:', err)
    }
}

async function getForcast(loc = '215854') {
    try {
        const storage = await storageService.query(`forcastResults_${loc}`)
        if (storage?.length) return storage;
        console.log('getForcast api!');
        const forcast = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${loc}?apikey=${API_KEY}`)
        storageService.postMany(`forcastResults_${loc}`, [...forcast.data.DailyForecasts])
        return forcast.data.DailyForecasts;
    } catch (err) {
        console.log('Error in getForcast:', err)
    }
}

async function getCurrentForcast(loc = '215854') {
    try {
        const storage = await storageService.query(`currentForcastResults_${loc}`)
        if (storage?.length) return storage[0];
        console.log('getCurrentForcast api!');
        const forcast = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${loc}?apikey=${API_KEY}`)
        storageService.post(`currentForcastResults_${loc}`, forcast.data[0])
        return forcast.data[0];
    } catch (err) {
        console.log('Error in getForcast:', err)
    }
}

async function getCityByGeoloc(lat, lng) {
    try {
        const storage = await storageService.query(`geoLocationResults_${lat}_${lng}`)
        if (storage?.length) return { label: storage[0].AdministrativeArea.LocalizedName, id: storage[0].Key };
        console.log('getCityByGeoloc api!');
        const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat}%2C${lng}&toplevel=false`)
        storageService.post(`geoLocationResults_${lat}_${lng}`, res.data)
        return { label: res.data.AdministrativeArea.LocalizedName, id: res.data.Key };
    } catch (err) {
        console.log('Error in getCityByGeoloc:', err)
    }
}

async function getCurrentForcasts(cities) {
    try {
        const citiesPromise = await cities.map(async (c) => c.currForcast = await getCurrentForcast(c.locId))
        return Promise.all(citiesPromise)
    } catch (err) {
        console.log('Error in getCurrentForcasts:', err)
    }
}

function getEmptyCity() {
    return {
        cityName: '',
        locId: '',
    }
}