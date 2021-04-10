import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Development from '../pages/Development';
import Commercial from '../pages/Commercial';
import Storage from '../pages/Storage';
import Production from '../pages/Production';
import Financial from '../pages/Financial';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Login } />
                <Route path="/singup" component={ Register } />
                <Route path="/home" component={ Home } />
                <Route path="/development" component={ Development } />
                <Route path="/commercial" component={ Commercial } />
                <Route path="/storage" component={ Storage } />
                <Route path="/production" component={ Production } />
                <Route path="/financial" component={ Financial } />
            </Switch>
        </BrowserRouter>
    )
}