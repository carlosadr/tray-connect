import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { 
    Button,
    Header,
    Search
} from '../../../components';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../../services/api';

import './styles.css';

export default function Commercial () {
    const [ campo, setCampo ] = useState("");
    const [ keys, setKeys ] = useState( new Array([]) );
    const [ values, setValues ] = useState( new Array([]) );
    const [ loadPage, setLoadPage ] = useState( true );

    const history = useHistory()

    useEffect ( () => {
        if( loadPage ){
            let dataKeys = new Array([])
            let dataValues = new Array([])
                        
            api('orders').once('value', snapshot => {
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

    function handleDelete( key ) {
        const response = window.confirm('Deseja excluir este desenvolvimento?')

        if( response ) {
            api('request_development').child( key ).remove()
            .then ( () => {
                alert( "Objeto removido com sucesso!" )
                setLoadPage( true )
            })
            .catch ( err => {
                alert( "Ocorreu um erro ao tentar excluir o objeto. \n \n Erro: " + err )
            })
        }
    } 

    function goToOrder( key ) {
        history.push( {
            pathname : 'view-order',
            state : key
        } )
    }

    return (
        <div className="body container-development">

            <Header title="Comercial" notfications={""} />
            
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

                <Button to="/add-order">
                    Adicionar
                </Button>
            </div>

            <div className="contant-body inner-shadow">
                <table className="container-table" >
                    <thead>
                        <tr className="header-table">
                            <td  className="col date-started">
                                Data de liberação
                            </td>
                            <td className="col client">
                                Cliente
                            </td>
                            <td className="col description">
                                Observação
                            </td>
                            <td className="col status">
                                Status
                            </td>
                            <td className="col actions">
                                Ações
                            </td>
                        </tr>
                    </thead>

                    <tbody className="container-table-body">
                    { values.map(( value, index ) => {
                            if( value.length !== 0 && value.state !=="FINALIZADO" ) {
                                return (
                                    <tr key={index} className="table-rows" >
                                        <td onClick={ () => goToOrder( keys[ index ] ) } className="col date-started">{ value.date_started  }</td>
                                        <td onClick={ () => goToOrder( keys[ index ] ) } className="col client">{ value.client }</td>
                                        <td onClick={ () => goToOrder( keys[ index ] ) } className="col description">{ value.observation }</td>
                                        <td onClick={ () => goToOrder( keys[ index ] ) } className="col status">{ value.state }</td>
                                        <td onClick={ () => goToOrder( keys[ index ] ) } className="col designer">{ value.designer }</td>
                                        <td style={{ flex: 0, width: 120 }} className="col actions">
                                            <button className="trash" onClick={ () => handleDelete( keys[index] )} >
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
            </div>
        </div>
    )
}