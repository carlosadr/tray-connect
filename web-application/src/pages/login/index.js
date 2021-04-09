import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logomarca from '../../assets/images/logo-marca.png';
import separator from '../../assets/images/separator.png';

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

                    <img style={{ width : "40%", height : "auto", marginBottom : "40px" }} src={separator} alt=""/>

                    <button type="submit" >Entrar</button>

                    <div className="container-singup">
                        Se você ainda não é cadastrado, <Link to="/register">clique aqui</Link>.
                    </div>
                </form>
                
            </div>
            <div/>
        </div>
    )
}