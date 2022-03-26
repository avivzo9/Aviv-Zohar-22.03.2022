import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { Favorites } from './pages/Favorites/Favorites';
import { loadFavorites } from './store/actions/favoritesActions';
import { appColors } from './assets/appColors';
import { Forcast } from './pages/Forcast/Forcast';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun, faLocation, faHouse, faHeart } from '@fortawesome/free-solid-svg-icons'

import './App.scss';

library.add(faMoon, faSun, faLocation, faHouse, faHeart)

function App() {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.forcastReducer.isDarkMode)

  useEffect(() => {
    dispatch(loadFavorites())
  }, [])

  return (
    <Router>
      <div className={`App  ${!isDarkMode ? 'dark-container' : 'light-container'}`} style={{ backgroundColor: isDarkMode ? appColors.primary.dark : appColors.primary.light }}>
        <AppHeader />
        <Switch>
          <Route component={Favorites} path='/favorites' />
          <Route component={Forcast} path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;