import React from 'react';

import './styles.css';

function Button ({
    type,
    onClick,
    children,
    marginVertical,
    marginHorizontal,
}) {
    return (
        <>
            <button 
                className="container-button"
                style={{
                    marginTop : marginVertical,
                    marginBottom : marginVertical,
                    marginLeft : marginHorizontal,
                    marginRight : marginHorizontal,
                }}
                type={ type }
                onClick={ () => onClick }
            >
                { children }
            </button>
        </>
    )
}

export default Button;