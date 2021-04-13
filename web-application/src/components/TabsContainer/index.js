import React from 'react'

import './styles.css'

function TabsContainer({ renderButtons, children }) {
    return (
        <>
            <div className="container-tabs">
                <div className="container-buttons">
                    { renderButtons }
                </div>
                <div className="container-contants">
                    { children }
                </div>
            </div>
        </>
    )
}

export default TabsContainer;