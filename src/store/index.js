import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import { forcastReducer } from './reducers/forcastReducer'
import { favoritesReducer } from './reducers/favoritesReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    forcastReducer,
    favoritesReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))