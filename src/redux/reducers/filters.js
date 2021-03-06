const SET_SORT_BY = "filter/SET_SORT_BY"
const SET_CATEGORY = "filter/SET_CATEGORY"

let initialState = {
    category: null,
    sortBy: {
        type: 'rating',
        order: 'desc'
    }
}

export default function filters(state = initialState, action) {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.index
            }
        default:
            return state
    }
}

export const setSortBy = (payload) => ({type: SET_SORT_BY, payload})
export const setCategory = (index) => ({type: SET_CATEGORY, index})