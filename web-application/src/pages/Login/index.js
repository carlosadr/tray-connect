import React, { useState } from 'react';

import logomarca from '../../assets/images/logo-marca.png';

import { Button, Inputs, Separator, TextButton } from '../../components'

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
                        marginVertical="20px"
                        onChange={ e => setUser( e.target.value ) }
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
                        to="/reset-password"
                        text="Esqueci minha senha." 
                    />

                    <Separator marginVertical={"20px"} />

                    <Button 
                        type="submit"
                        marginVertical="20px"
                    >
                        Entrar
                    </Button>

                    <div className="container-singup">
                        Se você ainda não é cadastrado, <TextButton to="/singup" text="clique aqui"/>.
                    </div>
                </form>
                
            </section>
            <div/>
        </div>
    )
}