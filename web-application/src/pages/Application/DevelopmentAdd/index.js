import React, { useState } from 'react';
import { useHistory } from 'react-router';

import api, { storage } from '../../../services/api';

import { 
    Header, 
    Dropdown, 
    Inputs, 
    Separator, 
    Button
} from '../../../components'

import './styles.css';

export default function DevelopmentAdd () {
    const [ progress, setProgress ] = useState(0);
    const [ typeDevelopment, setTypeDevelopment ] = useState("");
    const [ priority, setPriority ] = useState("");
    const [ client, setClient ] = useState("");
    const [ observation, setObservation ] = useState("");
    const [ image, setImage ] = useState(null);
    const [ imageRef, setImageRef ] = useState(null);

    const history = useHistory()
    
    async function handleSave () {
        let key;
        
        api('request_development').push({
            date_started : new Date().toLocaleString(),
            type_development : typeDevelopment.toUpperCase(),
            priority : priority.toUpperCase(),
            client : client.toUpperCase(),
            observation : observation.toUpperCase(),
            state : "AGUARDANDO",
            designer : null,
        }).then( response => {
            key = response.key
        })

        setTimeout(() => {
            uploadImage( key, image )
            if ( imageRef ) {
                uploadImage( key, imageRef )
            }
        }, 1000)
    }

    function uploadImage( key, value ) {
        const uploadTask = storage( "request_development" )
        .child( value.name ).put( value, { contentType: 'image/jpeg' } );

        uploadTask.on(
            'state_changed',
            // Progess
            snapshot => {
                let percent = Math.round( snapshot.bytesTransferred / snapshot.totalBytes * 100 )
                setProgress(percent);
            },
            // Error
            err => {
                console.log(err);
            },
            // Complete
            () => {
                storage('request_development')
                    .child( value.name )
                    .getDownloadURL()
                    .then( url => {
                        let exist;
                        api(`request_development/${key}`).on( 'value', snapshot => {
                            exist = snapshot.child('urlImage').exists()
                        })

                        setTimeout(() => {
                            exist ? api(`request_development/${key}`).update( {
                                urlImageRef : url
                            } ) : api(`request_development/${key}`).update( {
                                urlImage : url
                            } )

                            let response = window.confirm("Deseja continuar á adicionar novos desenvolvimentos?\n> Clique em 'OK' para continuar\n> ou em 'Cancel' para voltar á pagina anterior;");
                            if ( response ){
                                history.go()
                            } else {
                                history.push("/development")
                            }
                        }, 1000)
                    }
                )
            }
        )
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
                        <Dropdown 
                            label="Tipo do Desenvolvimento"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                            onChange={ event => setTypeDevelopment( event.target.value ) }
                            options={(
                                <>
                                    <option value="cliente" >Cliente</option>
                                    <option value="interno" >Interno</option>
                                </>
                            )}
                        />
                        <Dropdown 
                            label="Prioridade"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                            onChange={ event => setPriority( event.target.value ) }
                            options={(
                                <>
                                    <option value="normal" >Normal</option>
                                    <option value="alta" >Alta</option>
                                </>
                            )}
                        />
                        <Inputs 
                            label="Cliente"
                            type="text"
                            value={ client }
                            onChange={ event => setClient( event.target.value ) }
                            placeholder="ex: Tray Connect"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                    </div>
                    <div>
                        <Inputs 
                            label="Observação"
                            type="textarea"
                            value={ observation }
                            onChange={ event => setObservation( event.target.value ) }
                            placeholder="ex: Desenvolver com elementos desenhados a mão."
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                    </div>
                    <div>
                        <Inputs 
                            label="Imagem Principal"
                            type="file"
                            onChange={ event => setImage( event.target.files[0] )}
                            placeholder="ex: Branco"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                        <Inputs 
                            label="Imagem de referência"
                            type="file"
                            onChange={ event => setImageRef( event.target.files[0] )}
                            placeholder="ex: Branco"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                    </div>
                </div>

                <progress value={ progress } max="100"/>
                <div style={{
                    justifyContent: 'center', 
                    maxHeight: "20px" ,
                    color: progress > 99 ? '#009DF5' : "#C5C8D9" 
                }} >
                    { progress }%
                </div>

                <Separator marginVertical={ "16px" } />

                <div style={{ alignItems: 'center', maxHeight: 'fit-content' }}>
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