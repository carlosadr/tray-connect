import React, {useState} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Home from './Home';
import Development from './Development';
import Commercial from './Commercial';
import Storage from './Storage';
import Production from './Production';
import Financial from './Financial';

import { MenuGlobal } from '../../components';

import './styles.css';

function Application () {
    const [ loggedIn, setLoggedIn ] = useState(false)
    return (
        <div className="container-body">
            <MenuGlobal />
            <div className="container-pages" >
                <Switch>
                <Route exact path="/" render={() => (
                    loggedIn ? (
                        <Redirect to="/home"/>
                    ) : (
                        <Redirect to="/login"/>
                    )
                )}/>
                    <Route path="/home" component={ Home } />
                    <Route path="/development" component={ Development } />
                    <Route path="/commercial" component={ Commercial } />
                    <Route path="/storage" component={ Storage } />
                    <Route path="/production" component={ Production } />
                    <Route path="/financial" component={ Financial } />
                </Switch>
            </div>
        </div>
    )
}

export default Application;