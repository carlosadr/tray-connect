import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../../services/api';

import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { 
    Header,
    TabButton,
    TabContant, 
    TabsContainer,
    Button,
    Search
} from '../../../components';

import './styles.css';

export default function Storage () {
    const [ campo, setCampo ] = useState("");
    const [ keys, setKeys ] = useState( new Array([]) );
    const [ values, setValues ] = useState( new Array([]) );
    const [ loadPage, setLoadPage ] = useState( true );

    const history = useHistory()

    useEffect ( () => {
        if( loadPage ){
            let dataKeys = new Array([])
            let dataValues = new Array([])
                        
            api('storage').on('value', snapshot => {
                let key, value, i = 0;
                // Funçao para montar os objetos na tela;
                snapshot.forEach( item => {
                    // Recupera o ID unico do Firebase do Objeto X
                    key = item.key;

                    // Recupera o Objeto do ID;
                    value = item.val()

                    dataKeys[i] = key
                    dataValues[i] = value
                    
                    localStorage.setItem( "lastBatch", item.child("batch").val() )

                    i++
                })
                setKeys( dataKeys )
                setValues( dataValues )
            })
            document.getElementById('default').click();

            setLoadPage( false )
        }
    }, [ keys, values, loadPage ] )

    api('storage').once('child_changed').then(() => { setLoadPage( true ) })

    // Funçao para deletar um objeto do firebase;
    function handleDelete( value ) {
        const response = window.confirm(`Deseja excluir este rolo?\n
        > Entrada: ${ value.batch } - Rolo: ${value.roll} - Metragem: ${value.quant}`)

        if( response ) {
            api('storage').child( value.key ).remove()
            .then ( () => {
                alert( "Objeto removido com sucesso!" )
                setLoadPage( true )
            })
            .catch ( err => {
                alert( "Ocorreu um erro ao tentar excluir o objeto. \n \n Erro: " + err )
            })
        }
    }

    // Filtro de Pesquisa
    function handleFilter( text ) {
        if ( text && campo ) {
            api('storage').orderByChild( campo )
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

    function goToAddStorage( ) {
        history.push( {
            pathname : 'add-storage'
        })
    }

    return (
        <div className="body container-storage" >

            <Header title="Estoque" notfications={""} />
            
            <div className="contant-body">
                <div className="container-search">

                    <Search 
                        onChangeSelect={ e => setCampo( e.target.value ) } 
                        onChangeInput={ e => handleFilter( e.target.value ) }
                        onClick={ () => handleFilter() }
                        renderOptions={(
                            <>
                                <option value="client" >Clientes</option>
                                <option value="reference" >Referência</option>
                                <option value="type_fabric" >Tipo de Tecido</option>
                                <option value="color_fabric" >Cor do Tecido</option>
                            </>
                        )}
                    />

                    <Button onClick={ () => goToAddStorage( ) }>
                        Adicionar
                    </Button>
                    
                </div>

                <TabsContainer 
                renderButtons={
                    <>
                        <TabButton text="Todos" id="default" />
                        <TabButton text="Clientes" />
                        <TabButton text="Fabrica" />
                    </>
                }>
                    <TabContant id="Todos" >
                        <table>
                            <thead>
                                <tr className="header-table">
                                    <td className="col started">
                                        Lote
                                    </td>
                                    <td className="col roll">
                                        Rolo
                                    </td>
                                    <td className="col date-started">
                                        Data de entrada
                                    </td>
                                    <td className="col client">
                                        Cliente
                                    </td>
                                    <td className="col reference">
                                        Referencia
                                    </td>
                                    <td className="col description">
                                        Descrição
                                    </td>
                                    <td className="col type">
                                        Tipo
                                    </td>
                                    <td className="col type-fabtic">
                                        Tipo do Tecido
                                    </td>
                                    <td className="col color-fabric">
                                        Cor do Tecido
                                    </td>
                                    <td className="col width-grid">
                                        Largura / Grade
                                    </td>
                                    <td className="col metric-unid">
                                        Quantidade
                                    </td>
                                    <td className="col review">
                                        Revisão
                                    </td>
                                    <td className="col actions">
                                        Ações
                                    </td>
                                </tr>
                            </thead>

                            <tbody>
                            { values.map(( value, index ) => { 
                                if ( value.length !== 0 ) { return (
                                    <tr key={ keys[index] } className="table-rows" >
                                        <td className="col batch">
                                            { value.batch }
                                        </td>
                                        <td className="col roll">
                                            { value.roll }
                                        </td>
                                        <td className="col date-started">
                                            { value.date_started }
                                        </td>
                                        <td className="col client">
                                            { value.client }
                                        </td>
                                        <td className="col reference">
                                            { value.reference }
                                        </td>
                                        <td className="col description">
                                            { value.description }
                                        </td>
                                        <td className="col type">
                                            { value.type_unit }
                                        </td>
                                        <td className="col type-fabtic">
                                            { value.type_fabric }
                                        </td>
                                        <td className="col color-fabric">
                                            { value.color_fabric }
                                        </td>
                                        <td className="col width-grid">
                                            { value.width_grid }
                                        </td>
                                        <td className="col metric-unid">
                                            { value.metric_unid }
                                        </td>
                                        <td className="col review">
                                            { value.review }
                                        </td>
                                        <td className="col actions">
                                            <button>
                                                <FiEdit size={ 18 } />
                                            </button>
                                            <button className="trash" onClick={ () => handleDelete({ 
                                                key : keys[index],
                                                batch : value.batch,
                                                roll : value.roll,
                                                quant : value.metric_unid
                                                } ) }>
                                                <FiTrash2 size={ 18 } />
                                            </button>
                                        </td>
                                    </tr>
                                )}
                                return null;
                                })
                            }
                            </tbody>
                        </table>
                    </TabContant>

                    <TabContant id="Clientes" >
                        <table>
                            <thead>
                                <tr className="header-table">
                                    <td className="col started">
                                        Lote
                                    </td>
                                    <td className="col roll">
                                        Rolo
                                    </td>
                                    <td className="col date-started">
                                        Data de entrada
                                    </td>
                                    <td className="col client">
                                        Cliente
                                    </td>
                                    <td className="col reference">
                                        Referencia
                                    </td>
                                    <td className="col description">
                                        Descrição
                                    </td>
                                    <td className="col type">
                                        Tipo
                                    </td>
                                    <td className="col type-fabtic">
                                        Tipo do Tecido
                                    </td>
                                    <td className="col color-fabric">
                                        Cor do Tecido
                                    </td>
                                    <td className="col width-grid">
                                        Largura / Grade
                                    </td>
                                    <td className="col metric-unid">
                                        Quantidade
                                    </td>
                                    <td className="col review">
                                        Revisão
                                    </td>
                                    <td className="col actions">
                                        Ações
                                    </td>
                                </tr>
                            </thead>

                            <tbody>
                                { values.map( ( value, index ) => {
                                    if( value.type_service === 'service' ) {
                                        return (
                                            <tr key={ keys[index] } className="table-rows" >
                                                <td className="col started">{value.batch}</td>
                                                <td className="col roll">{value.roll}</td>
                                                <td className="col date-started">{value.date_started}</td>
                                                <td className="col client">{value.client}</td>
                                                <td className="col reference">{value.reference}</td>
                                                <td className="col description">{value.description}</td>
                                                <td className="col type">{value.type_unit}</td>
                                                <td className="col type-fabtic">{value.type_fabric}</td>
                                                <td className="col color-fabric">{value.color_fabric}</td>
                                                <td className="col width-grid">{value.width_grid}</td>
                                                <td className="col metric-unid">{value.metric_unid}</td>
                                                <td className="col review">{value.review}</td>
                                                <td className="col actions">
                                                    <button>
                                                        <FiEdit size={ 18 } />
                                                    </button>
                                                    <button className="trash" onClick={ () => handleDelete( keys[index] ) }>
                                                        <FiTrash2 size={ 18 } />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    return null
                                })}
                            </tbody>
                        </table>
                    </TabContant>

                    <TabContant id="Fabrica">
                        <table>
                            <thead>
                                <tr className="header-table">
                                    <td className="col started">
                                        Lote
                                    </td>
                                    <td className="col roll">
                                        Rolo
                                    </td>
                                    <td className="col date-started">
                                        Data de entrada
                                    </td>
                                    <td className="col client">
                                        Cliente
                                    </td>
                                    <td className="col reference">
                                        Referencia
                                    </td>
                                    <td className="col description">
                                        Descrição
                                    </td>
                                    <td className="col type">
                                        Tipo
                                    </td>
                                    <td className="col type-fabtic">
                                        Tipo do Tecido
                                    </td>
                                    <td className="col color-fabric">
                                        Cor do Tecido
                                    </td>
                                    <td className="col width-grid">
                                        Largura / Grade
                                    </td>
                                    <td className="col metric-unid">
                                        Quantidade
                                    </td>
                                    <td className="col review">
                                        Revisão
                                    </td>
                                    <td className="col actions">
                                        Ações
                                    </td>
                                </tr>
                            </thead>

                            <tbody>
                            { values.map( ( value, index ) => {
                                    if( value.type_service === 'fabric' ) {
                                        return (
                                            <tr key={ keys[index] } className="table-rows" >
                                                <td className="col started">{value.batch}</td>
                                                <td className="col roll">{value.roll}</td>
                                                <td className="col date-started">{value.date_started}</td>
                                                <td className="col client">{value.client}</td>
                                                <td className="col reference">{value.reference}</td>
                                                <td className="col description">{value.description}</td>
                                                <td className="col type">{value.type_unit}</td>
                                                <td className="col type-fabtic">{value.type_fabric}</td>
                                                <td className="col color-fabric">{value.color_fabric}</td>
                                                <td className="col width-grid">{value.width_grid}</td>
                                                <td className="col metric-unid">{value.metric_unid}</td>
                                                <td className="col review">{value.review}</td>
                                                <td className="col actions">
                                                    <button>
                                                        <FiEdit size={ 18 } />
                                                    </button>
                                                    <button className="trash" onClick={ () => handleDelete( keys[index] ) }>
                                                        <FiTrash2 size={ 18 } />
                                                    </button>
                                                </td>
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