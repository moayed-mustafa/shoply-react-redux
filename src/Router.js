
import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Product from './Product'
import Products from './Products'
export default function Routes() {


    return (
        <div>

            <Switch>

                <Route exact path="/">
                    <Products/>
                </Route>
                <Route exact path="/products/:id">
                    <Product/>
                </Route>
            </Switch>
        </div>
    )


}