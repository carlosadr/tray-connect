import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

import {
    FiCheckCircle,
    FiExternalLink,
    FiPauseCircle,
    FiPlayCircle,
    FiXCircle
} from 'react-icons/fi';

import {
    Header, 
    Inputs
    // Dropdown, 
} from '../../../components'

import './styles.css';

export default function DevelopmentView ( key ) {
    const [ keyDevelopment ] = useState( key.location.state );
    const [ development, setDevelopment ] = useState({});
    const [ reference /*, setReference*/ ] = useState();
    const [ designer, setDesigner ] = useState();
    
    useEffect ( () => {
        api("request_development").child( keyDevelopment ).on('value', snapshot => {
            setDevelopment( snapshot.val() )
        })

    }, [ keyDevelopment ])

    function handleState ( button ) {
        let exist;
        let ref = api('request_development').child( keyDevelopment )
        console.log( button );
        
        switch ( button ){
            case "play" : 
                ref.once('value', snapshot => {
                    exist = snapshot.child("date_paused").exists()
                })

                if( !exist ){
                    ref.update({
                        state : "EM ANDAMENTO",
                        date_initial : new Date().toLocaleString(),
                        designer : designer,
                    })
                } else {
                    ref.update({
                        state : "EM ANDAMENTO",
                        date_returned : new Date().toLocaleString(),
                        designer : designer,
                    })
                }
            break;

            case "pause" : 
                ref.update({
                    state : "PAUSADO",
                    date_paused : new Date().toLocaleString(),
                    designer : designer,
                })
            break;

            case "cancel" :
                ref.once('value', snapshot => {
                    exist = snapshot.child("date_finished").exists()
                })

                if ( exist ) {
                    alert( "Esse desenvolvimento já foi finalizado, devido a isso não pode mais ser cancelado." )
                }else{
                    ref.update({
                        state : null,
                        date_initial : null,
                        date_paused : null,
                        date_returned : null,
                        designer : null,
                    })
                }
            break;

            case "finish" :
                ref.update({
                    state : "FINALIZADO",
                    date_finished : new Date().toLocaleString(),
                    designer : null,
                })
            break;

            default: break
        }

        
    }
    
    return (
        <>
            <Header
                title="Adicionar Desenvolvimento"
                goBack
            />

            <div className="body">
                <div className="container-inputs" >
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
                            disabled={ true }
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
                        value={ reference }
                        // onChange={ event => setDesigner( event.target.value ) }
                        // placeholder="ex: Designer"
                        marginHorizontal={ "8px" }
                        marginVertical={ "8px" }
                    />
                    <Inputs
                        label="Designer"
                        type="text"
                        disabled={ true }
                        value={ designer }
                        onChange={ event => setDesigner( event.target.value ) }
                        placeholder="ex: Designer"
                        marginHorizontal={ "8px" }
                        marginVertical={ "8px" }
                    />
                    { /* TODO: Botoes de açoes para cada atividade.*/ }
                    <div
                        style={{
                            display: 'flex',
                            flex: 1,
                            marginTop: 22,
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        <button className="btn btn-play" onClick={ () => handleState( "play" ) }>
                            <div className="float-text">
                                Iniciar
                            </div>
                            <FiPlayCircle size={ 24 } />
                        </button>
                        <button className="btn btn-pause" onClick={ () => handleState( "pause" ) }>
                            <div className="float-text">
                                Pausar
                            </div>
                            <FiPauseCircle size={ 24 } />
                        </button>
                        <button className="btn btn-finish" onClick={ () => handleState( "finish" ) }>
                            <div className="float-text">
                                Finalizar
                            </div>
                            <FiCheckCircle size={ 24 } />
                        </button>
                        <button className="btn btn-cancel" onClick={ () => handleState( "cancel" ) }>
                            <div className="float-text">
                                Cancelar
                            </div>
                            <FiXCircle size={ 24 } />
                        </button>
                    </div>
                </div>

                <div>
                    <div 
                        className="container-image inner-shadow"
                        style={{ 
                            background: `url(${ development.urlImage })`
                        }}
                    >
                        <div className="button-image">
                            <div>
                                Imagem Principal
                            </div>
                            <a
                                className="btn-link"
                                href={ development.urlImage } 
                                target="_blank"
                                without 
                                rel="noreferrer"
                            >
                                Abrir em uma nova guia <FiExternalLink size={16} style={{ marginLeft: 8 }} />
                            </a>
                        </div>
                    </div>
                    <div 
                        className="container-image inner-shadow"
                        style={{ 
                            background: `url(${ development.urlImageRef })`
                        }}
                    >
                        <div className="button-image">
                            <div>
                                Imagem de referência
                            </div>
                            <a
                                className="btn-link"
                                href={ development.urlImage } 
                                target="_blank"
                                without 
                                rel="noreferrer"
                            >
                                Abrir em uma nova guia <FiExternalLink size={16} style={{ marginLeft: 8 }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}