import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import cart from "./reducers/cart";

const reducer = combineReducers({
    filters,
    pizzas,
    cart
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

window.store = store

export default store