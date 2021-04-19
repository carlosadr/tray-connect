import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import firebase from 'firebase'
import 'firebase/auth'

import Login from '../pages/Login';
import Singup from '../pages/Singup';
import CreateCompany from '../pages/CreateCompany';
import Application from '../pages/Application';

export default function Routes () {
    const [ loginAuth, setLoginAuth ] = useState( false )

    firebase.auth().onAuthStateChanged( user => {
        user ? firebase.database().ref(`superusers/${firebase.auth().currentUser.uid}`).once("value").then(snapshot => {
            setLoginAuth( snapshot.child("company").exists() )
            if ( snapshot.child("company").exists() ){
                snapshot.child('company').forEach( item => {
                    localStorage.setItem( "companyName", item.key )
                } )
            }
        })
        :
        setLoginAuth(false)
    })

    return (
        <BrowserRouter>
            <Switch>
                { loginAuth ? (
                    <>
                        <Route path="/" component={ Application } />
                    </>
                ) : (
                    <>
                        <Route exact path="/" component={ Login } />
                        <Route exact path="/singup" component={ Singup } />
                        <Route exact path="/create-company" component={ CreateCompany } />
                    </>
                )}
            </Switch>
        </BrowserRouter>
    )
}