import {combineReducers, createStore,  applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import thunk from 'redux-thunk';

const reducer = combineReducers({
    filters,
    pizzas
})

const store = createStore(reducer,  composeWithDevTools(
    applyMiddleware(thunk)))

window.store = store

export default  store