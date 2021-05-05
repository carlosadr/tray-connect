import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import api from '../../../services/api';

import {
    Header, 
    // Dropdown, 
    Inputs, 
    Separator, 
    Button
} from '../../../components'

import './styles.css';
import { Link } from 'react-router-dom';

export default function DevelopmentView ( key ) {
    const [ keyDevelopment ] = useState( key.location.state );
    const [ development, setDevelopment ] = useState({});
    const [ state, setState ] = useState("");
    const [ designer, setDesigner ] = useState("");

    
    useEffect ( () => {
        api("request_development").child( keyDevelopment ).on('value', snapshot => {
            setDevelopment( snapshot.val() )
        })
    }, [ keyDevelopment ])

    const history = useHistory()
    
    function handleSave () {
        api('request_development').child( key ).update({
            state : state,
            designer : designer,
        })
    }
    
    return (
        <>
            <Header
                title="Adicionar Desenvolvimento"
                goBack
            />

            <div className="body">
                <div 
                    className="container-inputs"
                >
                    <div>
                        <Inputs 
                            label="Tipo do Desenvolvimento"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                            value={ development.type_development }
                        />
                        <Inputs 
                            label="Prioridade"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                            value={ development.priority }
                        />
                        <Inputs 
                            label="Cliente"
                            type="text"
                            value={ development.client }
                            // onChange={ event => setClient( event.target.value ) }
                            placeholder="ex: Tray Connect"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                    </div>
                    <div>
                        <Inputs 
                            label="Observação"
                            type="textarea"
                            value={ development.observation }
                            // onChange={ event => setObservation( event.target.value ) }
                            placeholder="ex: Desenvolver com elementos desenhados a mão."
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                    </div>
                </div>

                <div style={{ flex: 0 }} >
                    <Inputs
                        label="Referência"
                        type="text"
                        // value={ reference }
                        // onChange={ event => setDesigner( event.target.value ) }
                        placeholder="ex: Designer"
                        marginHorizontal={ "8px" }
                        marginVertical={ "8px" }
                    />
                    <Inputs
                        label="Designer"
                        type="text"
                        value={ designer }
                        onChange={ event => setDesigner( event.target.value ) }
                        placeholder="ex: Designer"
                        marginHorizontal={ "8px" }
                        marginVertical={ "8px" }
                    />
                </div>

                <div>
                    <div 
                        className="container-image innershadow"
                        style={{ 
                            background: `url(${ development.urlImage })`
                        }}
                    >
                        <div className="button-image">
                            <a href={ development.urlImage } target="_blank" without rel="noreferrer">
                                Abrir em uma nova guia
                            </a>
                        </div>
                    </div>
                    <div 
                        className="container-image innershadow"
                        style={{ 
                            background: `url(${ development.urlImageRef })`
                        }}
                    >
                        <div className="button-image">
                            <a href={ development.urlImageRef } target="_blank" without rel="noreferrer">
                                Abrir em uma nova guia
                            </a>
                        </div>
                    </div>
                </div>

                <Separator marginVertical={ "16px" } />

                <div style={{ alignItems: 'center', maxHeight: '51px' }}>
                    <Button
                        marginHorizontal={'8px'}
                        marginVertical={'16px'}
                        onClick={ () => handleSave() }
                    >
                        Salvar
                    </Button>
                </div>
            </div>
        </>
    )
}