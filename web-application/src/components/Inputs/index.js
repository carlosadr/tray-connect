import React from 'react';

import './styles.css';

function Inputs ({
    label,
    type,
    value,
    placeholder,
    onChange
}) {
    return (
        <>
            <label className="container-label">{ label }</label>
            <input 
                className="container-input"
                type={ type }
                value={ value }
                placeholder={ placeholder }
                onChange={ onChange }
            />
        </>
    )
}

export default Inputs;