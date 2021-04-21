import React from 'react';
import { FiX } from 'react-icons/fi';

import './styles.css';

export default function Modal ({
    title,
    children,
    showModal,
    onClick
}) {

    return (
        <>
            <span 
                className="container-modal"
                style={{ display: showModal ? 'flex' : 'none' }} 
            >
                <section className="container-title">
                    <h1 className="modal-title">
                        { title }
                    </h1>
                    <button 
                        onClick={ onClick } 
                        className="modal-close" 
                    >
                        <FiX size={22} />
                    </button>
                </section>
                <span className="modal-body">
                    { children }
                </span>
            </span>
            
            <div 
                className="background-modal" 
                style={{ 
                    display: showModal ? 'flex' : 'none',
                }} 
                onClick={ onClick } 
            />
        </>
    )
}