import { favoritesService } from "../../service/favorites.service"

export function loadFavorites() {
    return async dispatch => {
        const favorites = await favoritesService.getFavorites()
        const action = { type: 'SET_FAVORITES', favorites }
        await dispatch(action)
    }
}
export function addFavorite(fav) {
    return async dispatch => {
        const favorite = await favoritesService.addFavorite(fav)
        const action = { type: 'ADD_FAVORITE', favorite }
        await dispatch(action)
    }
}
export function removeFavorite(favId) {
    return async dispatch => {
        await favoritesService.removeFavorite(favId)
        const action = { type: 'REMOVE_FAVORITE', favId }
        await dispatch(action)
    }
}