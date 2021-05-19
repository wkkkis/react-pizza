import {combineReducers, createStore,  applyMiddleware } from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import thunk from 'redux-thunk';

const reducer = combineReducers({
    filtersReducer: filters,
    pizzasReducer: pizzas
})

const store = createStore(reducer, applyMiddleware(thunk))

window.store = store

export default  store