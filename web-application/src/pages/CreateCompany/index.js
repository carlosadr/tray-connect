import React, { useState } from 'react';

import firebase from 'firebase'

import { Inputs, Button, Separator } from '../../components';

import logomarca from '../../assets/images/logo-marca.png';

// import './styles.css';

export default function CreateCompany () {

    const [ companyName, setCompanyName ] = useState("");
    const [ cnpj, setCnpj ] = useState("");
    const [ businessName, setBusinessName ] = useState("");
    const [ contact, setContact ] = useState("");
    
    async function handleSingup () {
        const uid = firebase.auth().currentUser.uid;

        firebase.database().ref().child("superusers").child(uid).child("company").child(companyName).set({
            company_data : {
                cnpj : cnpj,
                name_cnpj : businessName,
                contact : contact
            }
        }).then(() => {
            firebase.auth().signOut()
            alert("Parabens!\n\nCadastro realizado com sucesso, seja bem-vindo á Tray Connect.\n\nEfetue seu login e comece já o gerenciamento de sua empresa.")
        })
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
                        marginVertical="20px"
                        onChange={ e => setCompanyName( e.target.value ) }
                    />

                    <Inputs
                        label="CNPJ"
                        value={ cnpj }
                        placeholder="ex: 99.999.999/9999-99"
                        marginVertical="20px"
                        onChange={ e => setCnpj( e.target.value ) }
                    />

                    <Inputs
                        label="Nome Empresarial"
                        type="text"
                        value={ businessName }
                        placeholder="ex: Tray Connect Inc. LTDA"
                        marginVertical="20px"
                        onChange={ e => setBusinessName( e.target.value ) }
                    />

                    <Inputs
                        label="Contato"
                        type="tel"
                        value={ contact }
                        placeholder="ex: Tray Connect Inc. LTDA"
                        marginVertical="20px"
                        onChange={ e => setContact( e.target.value ) }
                    />

                    <Separator marginVertical="20px" />

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