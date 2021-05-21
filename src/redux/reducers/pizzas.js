import axios from "axios";

const SET_PIZZAS = "pizzas/SET_PIZZAS"
const SET_LOADED = "pizzas/SET_LOADING"

let initialState = {
    items: [],
    isLoaded: false
}

export default function pizzas(state = initialState, action) {
    switch (action.type){
        case SET_PIZZAS:
            return{
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case SET_LOADED:
            return{
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }

}

const setPizzas = (payload) => ({type: SET_PIZZAS, payload})
const setLoading = (payload) => ({type: SET_LOADED, payload})

export const getPizzas = (category, sortBy) => async dispatch => {
    dispatch(setLoading(false))
    let response = await axios.get(`http://localhost:3001/pizzas?${category != null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    dispatch(setPizzas(response.data))
}