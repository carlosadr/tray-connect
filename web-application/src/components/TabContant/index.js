import React from 'react'

import './styles.css'

function TabContant({ id, children }) {
    return (
        <>
            <div id={ id } className="contant-tabs" >
                { children }
            </div>
        </>
    )
}

export default TabContant;