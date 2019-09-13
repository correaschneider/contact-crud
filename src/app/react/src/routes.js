import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/contacts'
import Contact from './pages/contact'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/contacts/:id' component={Contact} />
        </Switch>
    </BrowserRouter>
)

export default Routes