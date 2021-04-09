import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import Development from '../pages/development'
import Commercial from '../pages/commercial'
import Storage from '../pages/storage'
import Production from '../pages/production'
import Financial from '../pages/financial'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={ Login } />
                <Route path="/singup" component={ Register } />
                <Route path="/" exact component={ Home } />
                <Route path="/development" component={ Development } />
                <Route path="/commercial" component={ Commercial } />
                <Route path="/storage" component={ Storage } />
                <Route path="/production" component={ Production } />
                <Route path="/financial" component={ Financial } />
            </Switch>
        </BrowserRouter>
    )
}