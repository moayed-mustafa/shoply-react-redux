import React, { useContext } from 'react'
import  CartContext  from './CartContext'



export default function Buttons({add, remove}) {

    const{ addToCart, removeFromCart} = useContext(CartContext)

    return (

        <div className="buttons">
            <button onClick={addToCart} > {add}</button>
            <button onClick={removeFromCart}>{remove}</button>
        </div>
    )
}