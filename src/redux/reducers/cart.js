const ADD_PIZZA_CART = "cart/ADD_PIZZA_CART"
const CLEAR_CART = "cart/CLEAR_CART"
const REMOVE_CART_ITEM = "cart/REMOVE_CART_ITEM"
const ITEM_PLUS = "cart/ITEM_PLUS"
const ITEM_MINUS = "cart/ITEM_MINUS"

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = obj => obj.reduce((sum, obj) => obj.price + sum, 0)

export default function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_PIZZA_CART: {

            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newObj = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }
            const count = Object.keys(newObj).reduce((sum, key) => newObj[key].items.length + sum, 0)
            const price = Object.keys(newObj).reduce((sum, key) => newObj[key].totalPrice + sum, 0)

            return {
                ...state,
                items: newObj,
                totalCount: count,
                totalPrice: price
            }
        }
        case CLEAR_CART:
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        case REMOVE_CART_ITEM:
            const newItem = {
                ...state.items
            }
            const currentTotalPrice = newItem[action.payload].totalPrice
            const currentTotalCount = newItem[action.payload].items.length
            delete newItem[action.payload]
            return {
                ...state,
                items: newItem,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        case ITEM_PLUS: {
            const newObjectItems = [...state.items[action.payload].items, state.items[action.payload].items[0]]

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjectItems,
                    totalPrice: getTotalPrice(newObjectItems)
                }
            }
            const count = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            const price = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

            return {
                ...state,
                items: newItems,
                totalPrice: price,
                totalCount: count
            }
        }
        case ITEM_MINUS: {
            const oldItems = state.items[action.payload].items
            const newObjectItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjectItems,
                    totalPrice: getTotalPrice(newObjectItems)
                }
            }

            const price = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)
            const count = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)

            return {
                ...state,
                items: newItems,
                totalPrice: price,
                totalCount: count
            }
        }
        default:
            return state
    }
}

export const addPizzaToCart = (pizzaObj) => ({type: ADD_PIZZA_CART, payload: pizzaObj})
export const clearCart = () => ({type: CLEAR_CART})
export const removeCartItem = (id) => ({type: REMOVE_CART_ITEM, payload: id})
export const plusCartItem = (id) => ({type: ITEM_PLUS, payload: id})
export const minusCartItem = (id) => ({type: ITEM_MINUS, payload: id})
