import React, { useState } from 'react';

import logomarca from '../../assets/images/logo-marca.png';
import separator from '../../assets/images/separator.png';

import { Button, Inputs, TextButton } from '../../components'

import './styles.css';

export default function Login () {
    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");

    function handleLogin() {
        alert("Seu email: " + user + "\nSua senha: " + password);
    }

    return (
        <div className="container-body">
            <section className="container-login">
                <form className="form-login" onSubmit={ handleLogin } >
                    <img src={logomarca} alt=""/>
                    
                    <Inputs
                        label="Endereço de e-mail"
                        type="email"
                        value={ user }
                        placeholder="ex: email@exemplo.com.br"
                        onChange={ e => setUser( e.target.value ) }
                    />

                    <Inputs
                        label="Senha"
                        type="password"
                        value={ password }
                        placeholder="Insira sua senha."
                        onChange={ e => setPassword( e.target.value ) }
                    />

                    <TextButton 
                        to="/reset-password" 
                        text="Esqueci minha senha." 
                    />

                    <img style={{ width : "40%", height : "auto", marginBottom : "40px" }} src={separator} alt=""/>

                    <Button type="submit" >Entrar</Button>

                    <div className="container-singup">
                        Se você ainda não é cadastrado, <TextButton to="/singup" text="clique aqui"/>.
                    </div>
                </form>
                
            </section>
            <div/>
        </div>
    )
}