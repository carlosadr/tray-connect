import React, { useEffect, useState } from 'react';

import { 
    Button,
    Header,
    Search,
    TabButton,
    TabContant, 
    TabsContainer
} from '../../../components';
import api from '../../../services/api';

import './styles.css';

export default function Development () {
    const [ campo, setCampo ] = useState("");
    const [ keys, setKeys ] = useState( new Array([]) );
    const [ values, setValues ] = useState( new Array([]) );
    const [ loadPage, setLoadPage ] = useState( true );

    useEffect ( () => {
        if( loadPage ){
            let dataKeys = new Array([])
            let dataValues = new Array([])
                        
            api('development').once('value', snapshot => {
                let key, value, i = 0;
                // Funçao para montar os objetos na tela;
                snapshot.forEach( item => {
                    // Recupera o ID unico do Firebase do Objeto X
                    key = item.key;
                    // Recupera o Objeto do ID;
                    value = item.val()
                    
                    dataKeys[i] = key
                    dataValues[i] = value
                    
                    i++
                })
                setKeys( dataKeys )
                setValues( dataValues )
            })
            document.getElementById('default').click();

            setLoadPage( false )
        }
    }, [ keys, values, loadPage ] )

    // Filtro de Pesquisa
    function handleFilter( text ) {
        if ( text && campo ) {
            api('development').orderByChild( campo )
            .startAt( `${text.toUpperCase()}` )
            .endAt( `${text.toUpperCase()}\uf8ff` )
            .once("value", snapshot => {
                let dataKeys = new Array([])
                let dataValues = new Array([])
                let i = 0;
                
                // Funçao para montar os objetos na tela;
                snapshot.forEach( item => {
                    // Recupera o ID unico do Firebase do Objeto X
                    let key = item.key;
                    dataKeys[i] = key

                    // Recupera o Objeto do ID;
                    let value = item.val()
                    dataValues[i] = value

                    i++
                })

                setKeys( dataKeys )
                setValues( dataValues )
                }
            )
        }
    }


    return (
        <div className="body container-development">
            <Header title="Desenvolvimento" notfications={""} />
            
                <div className="container-search">

                    <Search 
                        onChangeSelect={ e => setCampo( e.target.value ) } 
                        onChangeInput={ e => handleFilter( e.target.value ) }
                        onClick={ () => handleFilter() }
                        renderOptions={(
                            <>
                                <option value="client" >Clientes</option>
                                <option value="reference" >Referência</option>
                                <option value="designer" >Designer</option>
                            </>
                        )}
                    />

                    <Button to="/add-development">
                        Adicionar
                    </Button>
                    
                </div>

            <div className="contant-body">
                <TabsContainer 
                renderButtons={
                    <>
                        <TabButton text="Todos" id="default" />
                        <TabButton text="Clientes" />
                        <TabButton text="Studio" />
                        <TabButton text="Finalizados" />
                    </>
                }>
                    <TabContant id="Todos">
                        <table className="container-table" >
                            <thead>
                                <tr className="header-table">
                                    <td className="col-id">
                                        ID
                                    </td>
                                    <td className="col date-started">
                                        Data de entrada
                                    </td>
                                    <td className="col client">
                                        Cliente
                                    </td>
                                    <td className="col reference">
                                        Referência
                                    </td>
                                    <td className="col description">
                                        Descrição
                                    </td>
                                    <td className="col status">
                                        Status
                                    </td>
                                    <td className="col designer">
                                        Designer
                                    </td>
                                </tr>
                            </thead>

                            <tbody id="storage" className="container-table-body">
                                { values.map(( value, index ) => { return (
                                    <tr key={index} className="table-rows" >
                                        <td className="col-id">{ keys[index] }</td>
                                        <td className="col date-started">{ value.date_started  }</td>
                                        <td className="col client">{ value.client }</td>
                                        <td className="col reference">{ value.reference }</td>
                                        <td className="col description">{ value.description }</td>
                                        <td className="col status">{ value.status }</td>
                                        <td className="col designer">{ value.designer }</td>
                                    </tr>
                                )})
                                }
                            </tbody>
                        </table>
                    </TabContant>
                    <TabContant id="Clientes">
                        <table className="container-table" >
                            <thead>
                                <tr className="header-table">
                                    <td className="col-id">
                                        ID
                                    </td>
                                    <td className="col date-started">
                                        Data de entrada
                                    </td>
                                    <td className="col client">
                                        Cliente
                                    </td>
                                    <td className="col reference">
                                        Referência
                                    </td>
                                    <td className="col description">
                                        Descrição
                                    </td>
                                    <td className="col status">
                                        Status
                                    </td>
                                    <td className="col designer">
                                        Designer
                                    </td>
                                </tr>
                            </thead>

                            <tbody id="storage" className="container-table-body">
                                { values.map(( value, index ) => {
                                    if( value.type_service === 'client' ) {
                                        return (
                                            <tr key={index} className="table-rows" >
                                                <td className="col-id">{ keys[index] }</td>
                                                <td className="col date-started">{ value.date_started  }</td>
                                                <td className="col client">{ value.client }</td>
                                                <td className="col reference">{ value.reference }</td>
                                                <td className="col description">{ value.description }</td>
                                                <td className="col status">{ value.status }</td>
                                                <td className="col designer">{ value.designer }</td>
                                            </tr>
                                        )
                                    }
                                    return null
                                })}
                            </tbody>
                        </table>
                    </TabContant>
                    <TabContant id="Studio">
                        <table className="container-table" >
                            <thead>
                                <tr className="header-table">
                                    <td className="col-id">
                                        ID
                                    </td>
                                    <td className="col date-started">
                                        Data de entrada
                                    </td>
                                    <td className="col client">
                                        Cliente
                                    </td>
                                    <td className="col reference">
                                        Referência
                                    </td>
                                    <td className="col description">
                                        Descrição
                                    </td>
                                    <td className="col status">
                                        Status
                                    </td>
                                    <td className="col designer">
                                        Designer
                                    </td>
                                </tr>
                            </thead>

                            <tbody id="storage" className="container-table-body">
                                { values.map(( value, index ) => { 
                                    if(value.type_service === 'studio') {
                                        return (
                                            <tr key={index} className="table-rows" >
                                                <td className="col-id">{ keys[index] }</td>
                                                <td className="col date-started">{ value.date_started  }</td>
                                                <td className="col client">{ value.client }</td>
                                                <td className="col reference">{ value.reference }</td>
                                                <td className="col description">{ value.description }</td>
                                                <td className="col status">{ value.status }</td>
                                                <td className="col designer">{ value.designer }</td>
                                            </tr>
                                        )
                                    }
                                    return null
                                })}
                            </tbody>
                        </table>
                    </TabContant>
                    <TabContant id="Finalizados">
                        <table className="container-table" >
                            <thead>
                                <tr className="header-table">
                                    <td className="col-id">
                                        ID
                                    </td>
                                    <td className="col date-started">
                                        Data de entrada
                                    </td>
                                    <td className="col client">
                                        Cliente
                                    </td>
                                    <td className="col reference">
                                        Referência
                                    </td>
                                    <td className="col description">
                                        Descrição
                                    </td>
                                    <td className="col status">
                                        Status
                                    </td>
                                    <td className="col designer">
                                        Designer
                                    </td>
                                </tr>
                            </thead>

                            <tbody id="storage" className="container-table-body">
                                { values.map(( value, index ) => { 
                                    if(value.status === 'finalizado') {
                                        return (
                                            <tr key={index} className="table-rows" >
                                                <td className="col-id">{ keys[index] }</td>
                                                <td className="col date-started">{ value.date_started  }</td>
                                                <td className="col client">{ value.client }</td>
                                                <td className="col reference">{ value.reference }</td>
                                                <td className="col description">{ value.description }</td>
                                                <td className="col status">{ value.status }</td>
                                                <td className="col designer">{ value.designer }</td>
                                            </tr>
                                        )
                                    }
                                    return null
                                })}
                            </tbody>
                        </table>
                    </TabContant>
                </TabsContainer>
            </div>
        </div>
    )
}