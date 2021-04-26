import React from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import './styles.css';

export default function Search ({ renderOptions, onChangeSelect, onChangeInput, onClick }) {
    return (
        <section className="component-search bg-white innershadow" >
            <select defaultValue="" onChange={ onChangeSelect } className="search-select" >
                <option value="" disabled> Selecione tipo de filtro </option>
                <option value="---" disabled > ------------------------------------ </option>
                { renderOptions }
            </select>
            <FiChevronDown size={20} color={"#44475A"} className="search-select-chevron" />

            <input className="search-input" type="text" onChange={ onChangeInput } placeholder="Pesquise aqui."/>

            <button className="search-button" onClick={ onClick }>
                <FiSearch size={18} color={"#FAFAFC"} />
            </button>
        </section>
    )
}