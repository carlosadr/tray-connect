import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function TextButton ({
    to,
    text,
    center,
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
                    margin : center ? 'auto' : '0',
                }}
                to={ to ? to : "" }
                onClick={ onClick }
            >
                <div className="contant">
                    { text }
                </div>
            </Link>
        </>
    )
}

export default TextButton;