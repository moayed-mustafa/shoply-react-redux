import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCartAgain, removePartially, removeCompletely } from './actionCreator'



export default function Cart() {

    //  * select the cart from the store
    const cart = useSelector(store => store.cart)
    //  * make two lists out of the cart object, one for the products and one for the ids
    let cartList = Object.values(cart)
    let Ids = Object.keys(cart)

    const dispatch = useDispatch()

      //  * function to add an item to the cart
    function addItem(e) {
        let id = e.target.parentElement.id
        console.log(cart[id])

        const { count } = cart[id]
        const product = cart[id]
            dispatch(addToCartAgain(product, id,count +1))
    }


      //  * function to remove an item from the cart
    function removeItem(e) {
        let id = e.target.parentElement.id
        const { count } = cart[id]
        const product = cart[id]
        if (cart[id] !== undefined && count > 1) {
            dispatch(removePartially(product, id, count -1))
        }
        else if (cart[id] !== undefined && count === 1) {
            dispatch(removeCompletely(id))
        }
    }


    return (
        <div className="cart">

            <h1>Cart Page</h1>
            <ul className="cartList">
                {cartList.map((item, i) => (
                    <li key={Ids[i]} id={Ids[i]}>{item.count} - {item.name}
                    <button onClick={addItem} >+</button>
                    <button onClick={removeItem} >-</button>
                    </li>
                ))}
            </ul>




        </div>
    )


}