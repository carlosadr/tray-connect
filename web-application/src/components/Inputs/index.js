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
                {type !== "textarea" ? 
                    <input 
                        className="input innershadow"
                        type={ type }
                        value={ value }
                        placeholder={ placeholder }
                        onChange={ onChange }
                    />
                :
                    <textarea 
                        className="input-textarea innershadow"
                        type={ type }
                        value={ value }
                        placeholder={ placeholder }
                        onChange={ onChange }
                    />
                }
            </section>
        </>
    )
}

export default Inputs;