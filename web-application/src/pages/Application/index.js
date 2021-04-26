import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home';
import Development from './Development';
import Commercial from './Commercial';
import Storage from './Storage';
import Production from './Production';
import Financial from './Financial';
import StorageAdd from './StorageAdd';

import { MenuGlobal, Footer } from '../../components';

import './styles.css';

function Application () {
    return (
        <div className="container-body">
            <MenuGlobal />
            <div className="container-pages bg-white dropshadow" >
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/development" component={ Development } />
                    <Route path="/commercial" component={ Commercial } />
                    <Route exact path="/storage" component={ Storage } />
                    <Route path="/storage/add" component={ StorageAdd } />
                    <Route path="/production" component={ Production } />
                    <Route path="/financial" component={ Financial } />
                </Switch>

                <Footer />
            </div>
        </div>
    )
}

export default Application;