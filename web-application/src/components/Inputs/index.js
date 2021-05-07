import React from 'react';

import './styles.css';

function Inputs ({
    label,
    type,
    value,
    disabled,
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
                        className="input inner-shadow"
                        type={ type }
                        value={ value }
                        placeholder={ placeholder }
                        disabled={ disabled }
                        onChange={ onChange }
                    />
                :
                    <textarea 
                        className="input-textarea inner-shadow"
                        type={ type }
                        value={ value }
                        placeholder={ placeholder }
                        disabled={ disabled }
                        onChange={ onChange }
                    />
                }
            </section>
        </>
    )
}

export default Inputs;