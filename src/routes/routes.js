import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Home from '../pages/home'
import Details from '../pages/details'
function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/details/:id" component={Details}/>
        </BrowserRouter>
    )
}

export default Routes;