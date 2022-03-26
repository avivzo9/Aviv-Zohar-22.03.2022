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

    if (!favorites || !favoritesCurrForcasts?.length) return (<div><h2>!favoritesCurrForcasts.length</h2></div>)

    return (
        <>
            {!!favorites.length && <section className={`favorites-container ${currCity.currForcast.HasPrecipitation ? 'rain-bgi' : 'sunny-bgi'}`}>
                <h2>Your favorites</h2>
                <ul className='favorites-list hide-overflow'>
                    {favorites.map((fav, idx) => <FavoritePreview currForcast={favoritesCurrForcasts[idx]} favorite={fav} key={idx} />)}
                </ul>
            </section>}
            {!favorites.length && <span>You Have No Favorite Cities Yet</span>}
        </>
    )
}
