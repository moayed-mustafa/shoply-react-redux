import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import { addToCartForTheFirstTime, addToCartAgain, removePartially, removeCompletely } from './actionCreator'
import  CartContext  from './CartContext'
import Buttons from './Buttons'


export default function Product() {

    //  * select stuff from store
    const products = useSelector(store => store.products)
    const cart = useSelector(store => store.cart)
    const {id}= useParams()
    const product = products[id]
    const history = useHistory()
    const dispatch = useDispatch()

    function addToCart() {
        if (cart[id] === undefined) {
            dispatch(addToCartForTheFirstTime(product, id))
        } else {
            const { count } = cart[id]
            dispatch(addToCartAgain(product, id,count +1))
        }
    }
    function removeFromCart() {
        const {count} = cart[id]
        if (cart[id] !== undefined && count > 1) {
            dispatch(removePartially(product, id, count -1))
        }
        else if (cart[id] !== undefined && count === 1) {
            dispatch(removeCompletely(id))
        }
    }
    return (
        <>
            <h1>Product Page</h1>
            <button onClick = {()=> history.push("/cart")}>Go To Cart</button>
        <div className="product">
                            <img src={product.image_url} alt=""></img>
                            <p>Name:{product.name}</p>
                            <p>Price:{product.price}</p>
                <p>ID:  {id}</p>
                    {/* <Buttons add="Add To Cart" remove="Remove From Cart"/> */}

                            <button onClick={addToCart}> Add To Cart</button>
                            <button onClick={removeFromCart}>Remove From Cart</button>




            </div>

            </>
    )
}