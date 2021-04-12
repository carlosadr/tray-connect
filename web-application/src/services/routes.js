import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Singup from '../pages/Singup';
import Application from '../pages/Application';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={ Login } />
                <Route path="/singup" exact component={ Singup } />
                <Route path="/" component={ Application } />
            </Switch>
        </BrowserRouter>
    )
}