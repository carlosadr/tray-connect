import React, { useEffect, useState } from 'react';
import api, { user } from '../../../services/api';

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
    const [ designer, setDesigner ] = useState("");
    const [ visibleButtons, setVisibleButtons ] = useState([]);
    
    useEffect ( () => {
        api("request_development").child( keyDevelopment ).on('value', snapshot => {
            setDevelopment( snapshot.val() )

            if ( !snapshot.child('designer').val() ){
                api(`users/${ user().uid }`).once('value', snapshotItem => {
                    setDesigner( snapshotItem.child("displayName").val() )
                })
            } else {
                setDesigner( snapshot.child('designer').val() )
            }

            let isPlay     =   snapshot.child('date_initial').exists()
            let isPaused   =   snapshot.child('date_paused').exists()
            let isReturned =   snapshot.child('date_returned').exists()
            let isFinish   =   snapshot.child('date_finished').exists()

            setVisibleButtons([
                !isPlay || ( isPaused && !isReturned ),  //Botão Iniciar
                !isPaused && !isFinish && ( isPlay || isReturned ),   //Botão Pausar
                !isFinish && ( isPlay || isPaused || isReturned ),   //Botão Finalizar
                ( isPlay || isPaused || isReturned ) && !isFinish,    //Botão Cancelar
            ])
        })
    }, [ keyDevelopment ])

    function handleState ( button ) {
        let isStarted, isPaused, isReturned, isFinished;
        let ref = api('request_development').child( keyDevelopment )

        switch ( button ){
            case "play" : 
                ref.once('value', snapshot => {
                    isStarted = snapshot.child("date_initial").exists()
                    isPaused = snapshot.child("date_paused").exists()
                })

                if( isStarted && !isPaused ){
                    alert("Esse desenvolvimento já foi inicializado." +
                    "\nCaso deseje recomeçar é necessário cancela-lo.")

                } else if( !isStarted && !isPaused ){
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
                })
            break;

            case "cancel" :
                ref.once('value', snapshot => {
                    isFinished = snapshot.child("date_finished").exists()
                })

                if ( isFinished ) {
                    alert( "Esse desenvolvimento já foi finalizado, devido a isso não pode mais ser cancelado." )
                }else{
                    ref.update({
                        state : "AGUARDANDO",
                        date_initial : null,
                        date_paused : null,
                        date_returned : null,
                        designer : null,
                    })
                }
            break;

            case "finish" :
                ref.once('value', snapshot => {
                    isFinished = snapshot.child("date_initial").exists()
                    isReturned = snapshot.child("date_returned").exists()
                })

                console.log( isFinished )
                console.log( isReturned )

                if ( !isFinished || !isReturned ) {
                    alert( "Este desenvolvimento precisa ser iniciado para ser finalizado." )
                } else {
                    ref.update({
                        state : "FINALIZADO",
                        date_finished : new Date().toLocaleString(),
                    })
                }
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
                        placeholder="ex: Designer"
                        marginHorizontal={ "8px" }
                        marginVertical={ "8px" }
                    />

                    <div
                        style={{
                            display: 'flex',
                            flex: 1,
                            marginTop: 22,
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        { !visibleButtons[0] && !visibleButtons[1] && !visibleButtons[2] && !visibleButtons[3]  ? "FINALIZADO" : (
                            <>
                                <button 
                                    style={{ 
                                        display : visibleButtons[0] ? 'flex' : 'none',
                                        opacity : visibleButtons[0] ? 1 : 0,
                                        transition : 'linear 1s'
                                    }} 
                                    className="btn btn-play" onClick={ () => handleState( "play" ) }>
                                    <div className="float-text">
                                        Iniciar
                                    </div>
                                    <FiPlayCircle size={ 24 } />
                                </button>
                                <button 
                                    style={{ 
                                        display : visibleButtons[1] ? 'flex' : 'none',
                                        opacity : visibleButtons[1] ? 1 : 0,
                                        transition : 'linear 0.2s' 
                                    }} 
                                    className="btn btn-pause" onClick={ () => handleState( "pause" ) }>
                                    <div className="float-text">
                                        Pausar
                                    </div>
                                    <FiPauseCircle size={ 24 } />
                                </button>
                                <button 
                                    style={{ 
                                        display : visibleButtons[2] ? 'flex' : 'none',
                                        opacity : visibleButtons[2] ? 1 : 0,
                                        transition : 'linear 0.2s' 
                                    }} 
                                    className="btn btn-finish" onClick={ () => handleState( "finish" ) }>
                                    <div className="float-text">
                                        Finalizar
                                    </div>
                                    <FiCheckCircle size={ 24 } />
                                </button>
                                <button 
                                    style={{ 
                                        display : visibleButtons[3] ? 'flex' : 'none',
                                        opacity : visibleButtons[3] ? 1 : 0,
                                        transition : 'linear 0.2s' 
                                    }} 
                                    className="btn btn-cancel" onClick={ () => handleState( "cancel" ) }>
                                    <div className="float-text">
                                        Cancelar
                                    </div>
                                    <FiXCircle size={ 24 } />
                                </button>
                            </>
                        )}
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
                                without="true"
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
                                without="true"
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