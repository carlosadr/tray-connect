import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function TextButton ({
    to,
    text,
    center,
    alignText,
    onClick,
    marginVertical,
    marginHorizontal,
}) {
    return (
        <>
            <Link 
                className="container-link-button"
                style={{
                    justifyContent : alignText === "right" ? "flex-end" : null,
                    marginTop : marginVertical,
                    marginBottom : marginVertical,
                    marginLeft : marginHorizontal,
                    marginRight : marginHorizontal,
                }}
                to={ to ? to : "#" }
                onClick={ onClick }
            >
                <div style={{ 
                    margin : center ? '0 auto' : '0',
                 }} className="contant">
                    { text }
                </div>
            </Link>
        </>
    )
}

export default TextButton;