import  data  from '../data.json'

// let dataSet = new Set()
// dataSet.add(data.products)
// console.log(dataSet)
export default function products(state = data.products) {
    //  * as of now, only return the state
    return state
    // switch (action.type) {
    //     // * those actions are to be refactored later into actionTypes.js
    //     case "ADD_TO_CART":
    //         return " "
    //     default:
    //         return state
    // }
}