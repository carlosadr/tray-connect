import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiChevronRight, FiDollarSign, FiHome, FiLayers, FiLayout, FiLogOut, FiPackage, FiTrello } from 'react-icons/fi';

import firebase from 'firebase';
import 'firebase/auth';

import logo from '../../assets/images/logo.png'

import './styles.css';

function MenuGlobal () {
    const [opacity, setOpacity] = useState(0);
    const [visible, setVisible] = useState('0px');
    const [margin, setMargin] = useState('0px');
    const [maxWidth, setMaxWidth] = useState('82px');
    const [rotate, setRotate] = useState('rotate(0deg)');

    function handleSingout() {
        localStorage.clear()
        firebase.auth().signOut()
    }
    
    function handleExpander () {
        maxWidth === '82px' ? setMaxWidth('240px') : setMaxWidth('82px');
        rotate === 'rotate(0deg)' ? setRotate('rotate(180deg)') : setRotate('rotate(0deg)');
        if( opacity === 0 ){
            setTimeout( () => {
                opacity === 0 ? setOpacity(1) : setOpacity(0);
                visible === '0px' ? setVisible('auto') : setVisible('0px');
                margin === '24px' ? setMargin('0px') : setMargin('24px');
            }, 400 )
        } else {
            opacity === 0 ? setOpacity(1) : setOpacity(0);
            visible === '0px' ? setVisible('auto') : setVisible('0px');
            margin === '24px' ? setMargin('0px') : setMargin('24px');
        }
    }

    return (
        <nav 
            style={{ maxWidth : maxWidth, transition: 'linear 0.6s' }} 
            className="container-nav dropshadow"
        >
            <div className="container-buttons">
                <img src={ logo } alt="Tray Connect" className="container-img"/>
                <NavLink 
                    to="/"
                    exact
                    className="button"
                    activeClassName="button-active"
                >
                    <FiHome size={18} />
                    <div style={{ width : visible, marginLeft : margin, opacity : opacity, transition: 'linear 0.2s' }} >
                        Pagina Inicial
                    </div>
                </NavLink>

                <NavLink 
                    to="/storage"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiPackage size={18} />
                    <div style={{ width : visible, marginLeft : margin, opacity : opacity, transition: 'linear 0.2s' }} >
                        Estoque
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/development"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiLayers size={18} />
                    <div style={{ width : visible, marginLeft : margin, opacity : opacity, transition: 'linear 0.2s' }} >
                        Desenvolvimento
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/commercial"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiLayout size={18} />
                    <div style={{ width : visible, marginLeft : margin, opacity : opacity, transition: 'linear 0.2s' }} >
                        Comercial
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/production"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiTrello size={18} />
                    <div style={{ width : visible, marginLeft : margin, opacity : opacity, transition: 'linear 0.2s' }} >
                        Produção
                    </div>
                </NavLink>
                
                <NavLink 
                    to="/financial"
                    className="button"
                    activeClassName="button-active"
                >
                    <FiDollarSign size={18} />
                    <div style={{ width : visible, marginLeft : margin, opacity : opacity, transition: 'linear 0.2s' }} >
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
                    <div style={{ width : visible, marginLeft : margin, opacity : opacity, transition: 'linear 0.2s' }} >
                        Sair
                    </div>
                </Link>
            </div>
            <button style={{ transform : rotate, transition: 'linear 0.2s' }} className="button-expander" onClick={ () => handleExpander() }>
                <FiChevronRight size={16} color={'#000'} />
            </button>
        </nav>
    )
}

export default MenuGlobal;