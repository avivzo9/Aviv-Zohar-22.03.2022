import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FavoritePreview } from '../../cmps/FavoritePreview/FavoritePreview'
import { loadFavorites } from '../../store/actions/favoritesActions'
import { loadCurrForcasts } from '../../store/actions/forcastActions'

import './Favorites.scss'

export function Favorites() {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favoritesReducer.favorites)
    const favoritesCurrForcasts = useSelector(state => state.favoritesReducer.favoritesCurrForcasts)
    const currCity = useSelector(state => state.forcastReducer.currCity)

    useEffect(() => {
        dispatch(loadFavorites())
    }, [])

    useEffect(() => {
        if (favorites?.length) dispatch(loadCurrForcasts(favorites))
    }, [favorites])

    return (
        <>
            {favorites && !!favorites.length && <section className={`favorites-container ${currCity.currForcast?.HasPrecipitation ? 'rain-bgi' : 'sunny-bgi'}`}>
                <h2>Your favorites</h2>
                <ul className='favorites-list hide-overflow'>
                    {favorites.map((fav, idx) => <FavoritePreview currForcast={favoritesCurrForcasts[idx]} favorite={fav} key={idx} />)}
                </ul>
            </section>}
            {!favorites || !favorites.length && <section className={`favorites-container ${currCity.currForcast?.HasPrecipitation ? 'rain-bgi' : 'sunny-bgi'}`}>
                <h2>You dont have favorites yet!</h2>
            </section>}
        </>
    )
}
