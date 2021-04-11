import React, { useState } from 'react';

import { Inputs, Button } from '../../components';

import logomarca from '../../assets/images/logo-marca.png';
import separator from '../../assets/images/separator.png';

import './styles.css';

export default function Singup () {

    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ checked, setChecked ] = useState(false);

    function handleSingup () {

    }

    return (
        <div className="container-body">
            <section className="container-login">
                <form className="form-login" onSubmit={ handleSingup } >
                    <img src={logomarca} alt=""/>
                    
                    <Inputs
                        label="Endereço de e-mail"
                        type="email"
                        value={ user }
                        placeholder="ex: email@exemplo.com.br"
                        onChange={ e => setUser( e.target.value ) }
                    />

                    <Inputs
                        label="Defina sua senha"
                        type="password"
                        value={ password }
                        placeholder="Insira sua senha."
                        onChange={ e => setPassword( e.target.value ) }
                    />

                    <Inputs
                        label="Confirme sua senha"
                        type="password"
                        value={ confirmPassword }
                        placeholder="confirme sua senha."
                        onChange={ e => setConfirmPassword( e.target.value ) }
                    />

                    <section className="container-checkbox" >
                        <input 
                            type="checkbox" 
                            id="privacity" 
                            checked={ checked }
                            onChange={ e => setChecked(e.target.checked)} 
                        />
                        <label for="privacity" >Declaro que li e aceito os termos de privacidade.</label>
                    </section>

                    <img style={{ width : "40%", height : "auto", marginBottom : "40px", marginTop : "40px" }} src={separator} alt=""/>

                    <Button type="submit" >Cadastrar</Button>
                </form>
            </section>
            <div/>
        </div>
    )
}