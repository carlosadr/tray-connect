import React from 'react';

import separator from '../../assets/images/separator.png'

import './styles.css';

function Separator ({
    marginVertical
}) {
    return (
        <>
            <section 
                className="container-separator"
                style={{ 
                    marginTop: marginVertical, 
                    marginBottom: marginVertical 
                }}
            >
                <img
                    className="separator"
                    src={separator}
                    alt=""
                />
            </section>
        </>
    )
}

export default Separator;