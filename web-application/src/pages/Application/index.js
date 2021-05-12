import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home';
import Development from './Development';
import DevelopmentAdd from './DevelopmentAdd';
import DevelopmentView from './DevelopmentView';
import Commercial from './Commercial';
import CommercialAdd from './CommercialAdd';
import Storage from './Storage';
import StorageAdd from './StorageAdd';
import Production from './Production';
import Financial from './Financial';
import Profile from './Profile';

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
                    <Route path="/add-development" component={ DevelopmentAdd } />
                    <Route path="/view-development" component={ DevelopmentView } />
                    <Route path="/commercial" component={ Commercial } />
                    <Route path="/add-orders" component={ CommercialAdd } />
                    <Route path="/storage" component={ Storage } />
                    <Route path="/add-storage" component={ StorageAdd } />
                    <Route path="/production" component={ Production } />
                    <Route path="/financial" component={ Financial } />
                    <Route path="/profile" component={ Profile } />
                </Switch>

                <Footer />
            </div>
        </div>
    )
}

export default Application;