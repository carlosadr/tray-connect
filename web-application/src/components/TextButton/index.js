import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function TextButton ({
    to,
    text,
    onClick,
    marginVertical,
    marginHorizontal,
}) {
    return (
        <>
            <Link 
                className="container-link-button"
                style={{
                    marginTop : marginVertical,
                    marginBottom : marginVertical,
                    marginLeft : marginHorizontal,
                    marginRight : marginHorizontal,
                }}
                to={to}
                onClick={ onClick }
            >
                { text }
            </Link>
        </>
    )
}

export default TextButton;