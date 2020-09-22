import React from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router'

export default function Product() {

    const products = useSelector(store=> store.products)
    const {id }= useParams()
    const product = products[id]
    console.log(product)
    return (
        <>
       <h1>Product Page</h1>
        <div className="product">
                            <img src={product.image_url} alt=""></img>
                            <p>Name:{product.name}</p>
                            <p>Price:{product.price}</p>
                            <p>ID:  {id}</p>
                            {/* this will eventually come out of it's own componenet ---> dispatcher */}
                            <button> Add To Cart</button>
                            <button>Remove From Cart</button>




            </div>

            </>
    )
}