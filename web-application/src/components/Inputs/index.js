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
                <label className="label" htmlFor={ `input-${label}` }>{ label }</label>
                {type !== "textarea" ? 
                    <input 
                        id={ `input-${label}` }
                        className="input inner-shadow"
                        type={ type }
                        value={ value }
                        placeholder={ placeholder }
                        disabled={ disabled }
                        onChange={ onChange }
                    />
                :
                    <textarea 
                        id={ `input-${label}` }
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