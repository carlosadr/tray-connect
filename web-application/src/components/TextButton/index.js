import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function TextButton ({
    to,
    text,
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
            >
                { text }
            </Link>
        </>
    )
}

export default TextButton;