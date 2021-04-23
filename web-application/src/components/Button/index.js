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

    let styles = Object.assign({},
        style,
        {
            marginTop : marginVertical,
            marginBottom : marginVertical,
            marginLeft : marginHorizontal,
            marginRight : marginHorizontal,
        }
    )

    return (
        <>
            <Link 
                className="container-button"
                style={ styles }
                to={ to }
                onClick={ onClick }
            >
                { children }
            </Link>
        </>
    )
}

export default Button;