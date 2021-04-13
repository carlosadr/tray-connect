import React from 'react';
import { FiBell } from 'react-icons/fi'
import { Separator } from '../'

import './styles.css';

function Header({ title, notfications }) {
    return(
        <>
            <header className="container-header">
                <div style={{ width : "100%", justifyContent: "space-between" }} >
                    <div className="title">
                        <h2>
                            { title }
                        </h2>
                    </div>
                    <div className="notification">
                        <FiBell size={16}/>
                    </div>
                </div>
                <Separator />
            </header>
        </>
    )
}

export default Header;