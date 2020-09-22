import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router'

export default function Products() {


    const products = useSelector(store => store.products)
    let values = Object.values(products)
    let keys = Object.keys(products)


    const history = useHistory()
    return (
        <div className="products">
            Products
            <ul>
                {values.map((item, i)=> (
                    <li key = {keys[i]} onClick={()=> history.push(`products/${keys[i]}`)}>
                        <div className="product">
                            <p>Name:{item.name}</p>
                            {/* this will eventually come out of it's own componenet ---> dispatcher */}
                            <button> Add To Cart</button>
                            <button>Remove From Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}