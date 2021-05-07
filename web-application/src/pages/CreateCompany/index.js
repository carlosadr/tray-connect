import React, { useState } from 'react';

import firebase from 'firebase'

import { Inputs, Button, Separator } from '../../components';

import logomarca from '../../assets/images/logo-marca.png';

export default function CreateCompany () {

    const [ companyName, setCompanyName ] = useState("");
    const [ cnpj, setCnpj ] = useState("");
    const [ businessName, setBusinessName ] = useState("");
    const [ contact, setContact ] = useState("");
    
    async function handleSingup () {
        const user = firebase.auth().currentUser ;
        const displayName = !user.displayName ? localStorage.getItem('displayName') : user.displayName;
        const ref = firebase.database().ref().child("superusers").child(user.uid).child("company").child(companyName)

        try {
            ref.child("company_data").set({
                    cnpj : cnpj,
                    name_cnpj : businessName,
                }
            )
            ref.child(`users/${user.uid}`).set({
                    displayName : displayName,
                    contact : contact,
                    permissions : {
                        all : true
                    }
                }
            )
        }
        finally {
            firebase.auth().signOut()
            localStorage.removeItem('displayName')
            alert("Parabens!\n\nCadastro realizado com sucesso, seja bem-vindo á Tray Connect.\n\nEfetue seu login e comece já o gerenciamento de sua empresa.")
        }
    }

    return (
        <div className="container-body">
            <section className="container-login">
                <div className="form-login" >
                    <img src={ logomarca } alt=""/>
                    
                    <Inputs
                        label="Nome Fantasia"
                        type="text"
                        value={ companyName }
                        placeholder="ex: Tray Connect"
                        marginVertical={16}
                        onChange={ e => setCompanyName( e.target.value ) }
                    />

                    <Inputs
                        label="CNPJ"
                        value={ cnpj }
                        placeholder="ex: 99.999.999/9999-99"
                        marginVertical={16}
                        onChange={ e => setCnpj( e.target.value ) }
                    />

                    <Inputs
                        label="Nome Empresarial"
                        type="text"
                        value={ businessName }
                        placeholder="ex: Tray Connect Inc. LTDA"
                        marginVertical={16}
                        onChange={ e => setBusinessName( e.target.value ) }
                    />

                    <Inputs
                        label="Contato"
                        type="tel"
                        value={ contact }
                        placeholder="ex: (99) 99999-0000"
                        marginVertical={16}
                        onChange={ e => setContact( e.target.value ) }
                    />

                    <Separator marginVertical={16} />

                    <Button
                        to="/"
                        onClick={ () => handleSingup() } 
                    >
                        Cadastrar
                    </Button>
                </div>
            </section>
        </div>
    )
}