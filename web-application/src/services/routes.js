import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import firebase from 'firebase'
import 'firebase/auth'

import Login from '../pages/Login';
import Singup from '../pages/Singup';
import Application from '../pages/Application';

export default function Routes () {
    const [ loginAuth, setLoginAuth ] = useState( false )

    firebase.auth().onAuthStateChanged( user => {
        if ( user ) {
            setLoginAuth(true)
        } else {
            setLoginAuth(false)
        }
    })

    return (
        <BrowserRouter>
            <Switch>
                { loginAuth ? (
                    <Route path="/" component={ Application } />
                ) : (
                    <>
                        <Route exact path="/" component={ Login } />
                        <Route path="/singup" component={ Singup } />
                    </>
                )}
            </Switch>
        </BrowserRouter>
    )
}