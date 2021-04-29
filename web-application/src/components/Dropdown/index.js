import React from 'react';

import { FiChevronDown } from "react-icons/fi";

import './styles.css';

function Dropdown ({
    label,
    options,
    onChange,
    marginVertical,
    marginHorizontal,
}) {
    return (
        <>
            <section
                className="container-dropdown"
                style={{
                    marginTop : marginVertical,
                    marginBottom : marginVertical,
                    marginLeft : marginHorizontal,
                    marginRight : marginHorizontal,
                }}
            >
                <label className="label">{ label }</label>
                <select 
                    className="select innershadow"
                    onChange={ onChange }
                >
                    <option value="" selected disabled>Selecione uma opção</option>
                    <option value="---" disabled > ------------------------------------ </option>
                    { options }
                </select>

                <FiChevronDown size={20} color={"#44475A"} className="select-chevron" />

            </section>
        </>
    )
}

export default Dropdown;