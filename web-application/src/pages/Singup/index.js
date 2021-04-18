import React, { useState } from 'react';

import firebase from 'firebase'
import 'firebase/auth'

import { Inputs, Button, Checkbox, Separator } from '../../components';

import logomarca from '../../assets/images/logo-marca.png';

import './styles.css';

export default function Singup () {

    const [ displayName, setDisplayName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ checked, setChecked ] = useState(false);

    async function handleSingup () {
        password === confirmPassword && checked ?

        await firebase.auth().createUserWithEmailAndPassword( email , password )
        .then( response => {
            const uid = response.user.uid
            firebase.database().ref().child("superusers").child(uid).set({
                email : email,
                displayName : displayName,
                permissions : { all : true }
            }).then( () => {
                localStorage.setItem("uid", uid)
            })
        }).catch( err => alert( err ))
        :
        alert("Verifique suas informações e tente novamente mais tarde.")
    }

    return (
        <div className="container-body">
            <section className="container-login">
                <div className="form-login" >
                    <img src={logomarca} alt=""/>

                    <Inputs
                        label="Nome"
                        type="text"
                        value={ displayName }
                        placeholder="ex: Antonio Lucas"
                        marginVertical="20px"
                        onChange={ e => setDisplayName( e.target.value ) }
                    />
                    
                    <Inputs
                        label="Endereço de e-mail"
                        type="email"
                        value={ email }
                        placeholder="ex: email@exemplo.com.br"
                        marginVertical="20px"
                        onChange={ e => setEmail( e.target.value ) }
                    />

                    <Inputs
                        label="Defina sua senha"
                        type="password"
                        value={ password }
                        placeholder="insira sua senha."
                        marginVertical="20px"
                        onChange={ e => setPassword( e.target.value ) }
                    />

                    <Inputs
                        label="Confirme sua senha"
                        type="password"
                        value={ confirmPassword }
                        placeholder="confirme sua senha."
                        marginVertical="20px"
                        onChange={ e => setConfirmPassword( e.target.value ) }
                    />

                    <Checkbox
                        id="privacity"
                        checked={ checked }
                        marginVertical="20px"
                        onChange={ e => setChecked(e.target.checked) }
                    >
                        Declaro que li e aceito os termos de privacidade.
                    </Checkbox>

                    <Separator marginVertical="20px" />

                    <Button
                        to="/create-company"
                        onClick={ () => handleSingup() } 
                    >
                        Cadastrar
                    </Button>
                </div>
            </section>
        </div>
    )
}