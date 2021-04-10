import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function TextButton ({
    to,
    text
}) {
    return (
        <>
            <Link 
                className="container-link-button"
                to={to}
            >
                { text }
            </Link>
        </>
    )
}

export default TextButton;