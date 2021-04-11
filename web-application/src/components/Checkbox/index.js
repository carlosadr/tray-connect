import React from 'react';

import './styles.css'

function Checkbox ({
    id,
    checked,
    onChange,
    children,
    marginHorizontal,
    marginVertical,
}) {
    return (
        <>
            <section 
                className="container-checkbox"
                style={{
                    marginTop : marginVertical,
                    marginBottom : marginVertical,
                    marginLeft : marginHorizontal,
                    marginRight : marginHorizontal,
                }}
            >
                <input 
                    id={ id }
                    type="checkbox" 
                    checked={ checked }
                    onChange={ onChange } 
                />
                <label for={ id } >
                    { children }
                </label>
            </section>
        </>
    )
}

export default Checkbox;