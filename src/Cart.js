import React, {useContext} from 'react'
import { useSelector } from 'react-redux'
// import Buttons from './Buttons'
// import CartContext from './CartContext'



export default function Cart() {
    // const { addToCart, removeFromCart } = useContext(CartContext)

    const cart = useSelector(store => store.cart)
    console.log(cart)
    let cartList = Object.values(cart)


    return (
        <div className="cart">

            <h1>Cart Page</h1>
            <ul className="cartList">
                {cartList.map(item => (
                    <li>{item.count} - {item.name}
                        {/* <Buttons add="+" remove="-"/> */}
                    {/* <button onClick={addToCart}>+</button>
                    <button onClick={removeFromCart}>-</button> */}
                    </li>
                ))}
            </ul>




        </div>
    )


}