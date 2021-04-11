import React from 'react';

import './styles.css';

function Inputs ({
    label,
    type,
    value,
    placeholder,
    onChange,
    marginVertical,
    marginHorizontal,
}) {
    return (
        <>
            <section
                className="container-input"
                style={{
                    marginTop : marginVertical,
                    marginBottom : marginVertical,
                    marginLeft : marginHorizontal,
                    marginRight : marginHorizontal,
                }}
            >
                <label className="label">{ label }</label>
                <input 
                    className="input"
                    type={ type }
                    value={ value }
                    placeholder={ placeholder }
                    onChange={ onChange }
                />
            </section>
        </>
    )
}

export default Inputs;