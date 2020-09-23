import products from './products'


export default function cart(state = {}, action) {
    switch (action.type) {
        case "ADD_ITEM_FOR_THE_FIRST_TIME":
            return {...state, [action.id]:{...action.product, count:1}}
        case "ADD_ITEM_AGAIN":
            return {...state, [action.id]: {...action.product, count: action.count} }

        case "REMOVE_PARTIALLY_FROM_CART":

            return {...state, [action.id]: {...action.product, count: action.count} }
        case "REMOVE_COMPLETELY_FROM_CART":
            delete(state[action.id])
            return {...state}
        default:
            return state
    }
}