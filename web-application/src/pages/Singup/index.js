import React, { useState } from 'react';

import { Inputs, Button, Checkbox, Separator } from '../../components';

import logomarca from '../../assets/images/logo-marca.png';

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
                        marginVertical="20px"
                        onChange={ e => setUser( e.target.value ) }
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

                    <Button type="submit" >Cadastrar</Button>
                </form>
            </section>
            <div/>
        </div>
    )
}