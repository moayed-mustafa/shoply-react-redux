import products from './products'


export default function cart(state = {}, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return "do something"
        case "REMOVE_FROM_CART":
            return "Do something here too!"
        default:
            return state
    }
}