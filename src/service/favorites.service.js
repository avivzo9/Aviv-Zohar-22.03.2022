import { storageService } from "./async-storage.service"

const STORAGE_KEY = 'favorites'

export const favoritesService = {
    getFavorites,
    addFavorite,
    removeFavorite
}

async function getFavorites() {
    try {
        return await storageService.query(STORAGE_KEY)
    } catch (err) {
        console.log('Error in getFavorites:', err)
    }
}

async function addFavorite(fav) {
    try {
        return await storageService.post(STORAGE_KEY, fav)
    } catch (err) {
        console.log('Error in getFavorites:', err)
    }
}

async function removeFavorite(favId) {
    try {
        return await storageService.remove(STORAGE_KEY, favId)
    } catch (err) {
        console.log('Error in getFavorites:', err)
    }
}