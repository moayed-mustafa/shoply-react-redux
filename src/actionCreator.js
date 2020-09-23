
import {
    addItemForTheFirstTime,
    addItemAgain,
    removePartiallyFromCart,
    removeCompletelyFromCart
} from './actionTypes'

function addToCartForTheFirstTime(product, id) {
    return {type: addItemForTheFirstTime, product, id }
}
function addToCartAgain(product, id, count) {
    return {type: addItemAgain, product, id, count }
}
function removePartially(product, id, count) {
    return {type: removePartiallyFromCart, product, id, count }
}
function removeCompletely(id) {
    return {type: removeCompletelyFromCart, id }
}

export {addToCartForTheFirstTime, addToCartAgain, removePartially, removeCompletely}