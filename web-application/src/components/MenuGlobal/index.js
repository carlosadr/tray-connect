import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiChevronRight, FiDollarSign, FiHome, FiLayers, FiLayout, FiLogOut, FiPackage, FiTrello } from 'react-icons/fi';

import firebase from 'firebase';
import 'firebase/auth';

import logo from '../../assets/images/logo.png'

import './styles.css';

function MenuGlobal () {
    const [visible, setVisible] = useState('none');
    const [maxWidth, setMaxWidth] = useState('82px');
    const [widthImag, setWidthImag] = useState('100%');
    const [rotate, setRotate] = useState('rotate(0deg)');

    function handleSingout() {
        localStorage.clear()
        firebase.auth().signOut()
    }
    
    function handleExpander () {
        visible === 'none' ? setVisible('flex') : setVisible('none');
        maxWidth === '82px' ? setMaxWidth('240px') : setMaxWidth('82px');
        widthImag === '100%' ? setWidthImag('40%') : setWidthImag('100%');
        rotate === 'rotate(0deg)' ? setRotate('rotate(180deg)') : setRotate('rotate(0deg)');
    }

    return (
        <nav style={{ maxWidth : maxWidth }} className="container-nav">
            <div className="container-buttons">
                <img style={{ width : widthImag }} src={ logo } alt="Tray Connect" className="container-img"/>
                <NavLink 
                    to="/"
                    exact
                    className="button"
                    activeClassName="button-active"
                >
                    <FiHome size={18} />
                    <div style={{ display : visible }} >
                        Pagina Inicial
                    </div>
                </NavLink>

                <NavLink 
                    to="/storage"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiPackage size={18} />
                    <div style={{ display : visible }} >
                        Estoque
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/development"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiLayers size={18} />
                    <div style={{ display : visible }} >
                        Desenvolvimento
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/commercial"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiLayout size={18} />
                    <div style={{ display : visible }} >
                        Comercial
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/production"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiTrello size={18} />
                    <div style={{ display : visible }} >
                        Produção
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/financial"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiDollarSign size={18} />
                    <div style={{ display : visible }} >
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
                    <div style={{ display : visible }} >
                        Sair
                    </div>
                </Link>
            </div>
            <button style={{ transform : rotate }} className="button-expander" onClick={ () => handleExpander() }>
                <FiChevronRight size={16} color={'#000'} />
            </button>
        </nav>
    )
}

export default MenuGlobal;