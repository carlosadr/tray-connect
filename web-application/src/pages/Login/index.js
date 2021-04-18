import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

import firebase from 'firebase';
import 'firebase/auth';

import logomarca from '../../assets/images/logo-marca.png';

import { Button, Inputs, Separator, TextButton } from '../../components'

import './styles.css';

export default function Login () {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    async function handleLogin() {
        firebase.auth().signInWithEmailAndPassword( email, password ).then( () => {
            return <Redirect to="/" />
        }).catch ( error => {
            alert( error )
        })
    }

    async function handleResetPassword() {
        await firebase.auth().sendPasswordResetEmail( email )
        .then( () => {
            alert( "Consulte seu email para alterar sua senha." )
        })
    }

    return (
        <div className="container-body">
            <section className="container-login">
                <div className="form-login" >
                    <img src={logomarca} alt=""/>
                    
                    <Inputs
                        label="Endereço de e-mail"
                        type="email"
                        value={ email }
                        placeholder="ex: email@exemplo.com.br"
                        marginVertical="20px"
                        onChange={ e => setEmail( e.target.value ) }
                    />

                    <Inputs
                        label="Senha"
                        type="password"
                        value={ password }
                        placeholder="insira sua senha."
                        marginVertical="20px"
                        onChange={ e => setPassword( e.target.value ) }
                    />

                    <TextButton 
                        to="#"
                        onClick={ () => handleResetPassword() }
                        text="Esqueci minha senha." 
                    />

                    <Separator marginVertical={"20px"} />

                    <Button 
                        marginVertical="20px"
                        to="/"
                        onClick={ () => handleLogin() }
                    >
                        Entrar
                    </Button>

                    <div className="container-singup">
                        Se você ainda não é cadastrado, <TextButton to="/singup" text="clique aqui"/>.
                    </div>
                </div>
                
            </section>
            <div/>
        </div>
    )
}