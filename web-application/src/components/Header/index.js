import React from 'react';
import { FiArrowLeft, FiBell } from 'react-icons/fi'
import { useHistory } from 'react-router';
import { Separator } from '..'

import './styles.css';

function Header({ 
        title,
        goBack,
        notfications
    }) {

    const history = useHistory()

    return(
        <>
            <header className="container-header">
                <div style={{ width : "100%", justifyContent: "space-between" }} >
                    <div 
                        style={{ display: goBack ? 'flex' : 'none' }}
                        className="goBack"
                        onClick={ () => history.goBack() } 
                    >
                        <FiArrowLeft size={20}/>
                    </div>
                    <div className="title">
                        <h2>
                            { title }
                        </h2>
                    </div>
                    <div className="notification">
                        <FiBell size={20}/>
                    </div>
                </div>
                <Separator />
            </header>
        </>
    )
}

export default Header;