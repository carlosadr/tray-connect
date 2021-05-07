import React from 'react';

import {
    Header, 
    Inputs
} from '../../../components'

import './styles.css'

export default function Profile() {
    return (
        <>
            <Header
                title="Profile"
                goBack
            />

            <div className="body">
                <div>
                    <Inputs
                        label="Nome"
                        type="text"
                        placeholder="ex: Pedro Henrrique"
                        marginHorizontal={8}
                        marginVertical={8}
                    />
                    <Inputs
                        label="E-mail"
                        type="text"
                        placeholder="ex: Pedro Henrrique"
                        marginHorizontal={8}
                        marginVertical={8}
                    />
                </div>
            </div>
        </>
    )
}