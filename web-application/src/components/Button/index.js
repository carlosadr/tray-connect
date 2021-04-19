import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Button ({
    to,
    onClick,
    style,
    children,
    marginVertical,
    marginHorizontal,
}) {
    return (
        <>
            <Link 
                className="container-button"
                style={[
                    style,
                {
                    marginTop : marginVertical,
                    marginBottom : marginVertical,
                    marginLeft : marginHorizontal,
                    marginRight : marginHorizontal,
                }]}
                to={ to }
                onClick={ onClick }
            >
                { children }
            </Link>
        </>
    )
}

export default Button;