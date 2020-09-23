import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router'


export default function Product() {

    const products = useSelector(store => store.products)
    const cart = useSelector(store => store.cart)
    const {id }= useParams()
    const product = products[id]
    // console.log(product)
    const history = useHistory()
    const dispatch = useDispatch()
    function addToCart() {
        if (cart[id] === undefined) {
            dispatch({
                type: "ADD_ITEM_FOR_THE_FIRST_TIME",
                product,
                id
            }
            )
        } else {
            const {count} = cart[id]
            console.log(count)
            dispatch({
                type: "ADD_ITEM_AGAIN",
                product,
                id,
                count: count + 1

            })
        }
    }
    function removeFromCart() {
        const {count} = cart[id]
        if (cart[id] !== undefined && count > 1) {
            dispatch({
                type: "REMOVE_PARTIALLY_FROM_CART",
                product,
                id,
                count: count -1
            })
        }
        else if (cart[id] !== undefined && count === 1) {
            dispatch({
                type: "REMOVE_COMPLETELY_FROM_CART",
                id
            })
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
                            {/* this will eventually come out of it's own componenet ---> dispatcher */}
                            <button onClick={addToCart}> Add To Cart</button>
                            <button onClick={removeFromCart}>Remove From Cart</button>




            </div>

            </>
    )
}