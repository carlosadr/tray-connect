import React from 'react';

import logomarca from '../../assets/images/logo-marca.png';
import './styles.css';

export default function Login () {
    return (
        <div className="container-body">
            <div className="container-login">
                <form className="form-login">
                    <img src={logomarca} alt=""/>
                    <label>Endereço de E-mail</label>
                    <input id="email" type="email" placeholder="ex: email@exemplo.com.br" />
                    <label>senha</label>
                    <input id="password" type="password" placeholder="Insira sua senha." />
                    <button>Entrar</button>
                </form>
            </div>
            <div className="container-image" >
                Imagem de login
            </div>
        </div>
    )
}