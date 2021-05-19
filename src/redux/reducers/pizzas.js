import axios from "axios";

const SET_PIZZAS = "pizzas/SET_PIZZAS"

let initialState = {
    items: [],
    isLoaded: false
}

export default function pizzas(state = initialState, action) {
    switch (action.type){
        case SET_PIZZAS:
            return{
                ...state,
                items: action.payload
            }
        default:
            return state
    }

}

const setPizzas = (payload) => ({type: SET_PIZZAS, payload})

export const getPizzas = () => async dispatch => {
    let data = await axios.get("http://localhost:3000/db.json")
    dispatch(setPizzas(data.data.pizzas))
}