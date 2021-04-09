import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logomarca from '../../assets/images/logo-marca.png';

import './styles.css';

export default function Login () {
    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");

    function handleLogin() {
        alert("Seu email: " + user + "\nSua senha: " + password);
    }

    return (
        <div className="container-body">
            <div className="container-login">
                <form className="form-login" onSubmit={ handleLogin } >
                    <img src={logomarca} alt=""/>
                    
                    <label>Endereço de e-mail</label>
                    <input 
                        type="email" 
                        value={ user }
                        placeholder="ex: email@exemplo.com.br" 
                        onChange={ e => setUser(e.target.value) }
                    />

                    <label>Senha</label>
                    <input 
                        type="password"
                        value={ password }
                        placeholder="Insira sua senha."
                        onChange={ e => setPassword(e.target.value) }
                    />
                    <Link to="/register" >Esqueu sua senha?</Link>

                    <button type="submit" >Entrar</button>
                </form>
            </div>
            <div/>
        </div>
    )
}