import React from 'react';

import './styles.css';

function Button ({
    onClick,
    type,
    children
}) {
    return (
        <>
            <button 
                className="container-button"
                type={ type }
                onClick={ () => onClick }
            >
                { children }
            </button>
        </>
    )
}

export default Button;