import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Singup from '../pages/Singup';
import Application from '../pages/Application';

export default function Routes () {

    const loggedIn = false;

    return (
        <BrowserRouter>
            <Switch>
                { loggedIn ? (
                    <Route path="/" component={ Application } />
                ) : (
                    <>
                        <Redirect to='/login' />
                        <Route path="/login" component={ Login } />
                        <Route path="/singup" component={ Singup } />
                    </>
                )}
            </Switch>
        </BrowserRouter>
    )
}