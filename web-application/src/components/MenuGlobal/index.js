import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { FiDollarSign, FiHome, FiLayers, FiLayout, FiLogOut, FiPackage, FiTrello } from 'react-icons/fi';

import firebase from 'firebase';
import 'firebase/auth';

import logo from '../../assets/images/logo.png'

import './styles.css';

function MenuGlobal () {
    const history = useHistory()
    
    function handleSingout() {
        firebase.auth().signOut().then( () => {
            localStorage.clear();
            history.go('/')
        })
    }

    return (
        <nav className="container-nav">
            <div className="container-buttons">
                <img src={logo} alt="Tray Connect" className="container-img"/>
                <NavLink 
                    to="/home"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiHome size={18} />
                    <div>
                        Pagina Inicial
                    </div>
                </NavLink>

                <NavLink 
                    to="/storage"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiPackage size={18} />
                    <div>
                        Estoque
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/development"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiLayers size={18} />
                    <div>
                        Desenvolvimento
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/commercial"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiLayout size={18} />
                    <div>
                        Comercial
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/production"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiTrello size={18} />
                    <div>
                        Produção
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/financial"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiDollarSign size={18} />
                    <div>
                        Financeiro
                    </div>
                </NavLink>
            </div>
            <div className="container-singout" >
                <Link
                    to="/"
                    className="button"
                    onClick={ () => handleSingout() }
                >
                    <FiLogOut size={18} color={"#44475A"} />
                    <div>
                        Sair
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default MenuGlobal;