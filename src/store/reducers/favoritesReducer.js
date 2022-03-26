const INITIAL_STATE = {
    favorites: [],
    favoritesCurrForcasts: []
}

export function favoritesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_FAVORITES':
            return {
                ...state,
                favorites: action.favorites
            }
        case 'SET_FAVORITES_CURR_FORCASTS':
            return {
                ...state,
                favoritesCurrForcasts: action.forcasts
            }
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.favorite]
            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(favorite => favorite._id !== action.favoriteId)
            }
        default:
            return state
    }
}