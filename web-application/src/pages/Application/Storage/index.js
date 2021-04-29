import React, { useState } from 'react';

import api from '../../../services/api';

import { 
    Header,
    TabButton,
    TabContant, 
    TabsContainer,
    Button,
    Search
} from '../../../components';

import './styles.css';

function Rows ( key, value ) {
    return `
        <tr class="table-rows" >
            <td class="col-id">
                ${ key }
            </td>
            <td class="col started">
                ${ value.num_started }
            </td>
            <td class="col roll">
                ${ value.roll }
            </td>
            <td class="col date-started">
                ${ value.date_started }
            </td>
            <td class="col client">
                ${ value.client }
            </td>
            <td class="col reference">
                ${ value.reference }
            </td>
            <td class="col description">
                ${ value.description }
            </td>
            <td class="col type">
                ${ value.type_unit }
            </td>
            <td class="col type-fabtic">
                ${ value.type_fabric }
            </td>
            <td class="col color-fabric">
                ${ value.color_fabric }
            </td>
            <td class="col width-grid">
                ${ value.width_grid }
            </td>
            <td class="col metric-unid">
                ${ value.metric_unid }
            </td>
            <td class="col review">
                ${ value.review }
            </td>
            <td class="col actions">
                Ações
            </td>
        </tr>
    `
}

export default function Storage () {
    const [ pesquisa, setPesquisa ] = useState("");
    const [ campo, setCampo ] = useState("");
    const [ loadPage, setLoadPage ] = useState( false );
    
    setTimeout( () => document.getElementById('default').click(), 100 )

    // Funçao que chama os valores de dentro do Estoque (storage) da Empresa (companyName)
    api('storage').once('value', snapshot => {
        setTimeout(() => {
            if( loadPage ) {
                let tableStorage = document.getElementById("storage");
                tableStorage.innerHTML = "";

                // Funçao para montar os objetos na tela;
                snapshot.forEach( item => {
                    // Recupera o ID unico do Firebase do Objeto X
                    let key = item.key;
                    // Recupera o Objeto do ID;
                    let value = item.val()

                    // Monta na tela;
                    tableStorage.insertAdjacentHTML( 'beforeend', Rows( key, value ))
                })
            }
        }, 50)
    }).then( () => {
        setLoadPage( false )
    })
    
    function handleFilter( ) {
        if ( pesquisa ) {
            api('storage').orderByChild( campo ).equalTo( pesquisa ).once("value", snapshot => {
                setTimeout(() => {
                    let tableStorage = document.getElementById("storage");
                    tableStorage.innerHTML = "";
        
                    // Funçao para montar os objetos na tela;
                    snapshot.forEach( item => {
                        // Recupera o ID unico do Firebase do Objeto X
                        let key = item.key;
                        // Recupera o Objeto do ID;
                        let value = item.val()
                        // Monta na tela;
                        tableStorage.insertAdjacentHTML( 'beforeend', Rows( key, value ))
                    })
                }, 50 )
            })
        }
    }

    return (
        <div className="body container-storage" onLoad={ () => setLoadPage( true ) } >

            <Header title="Estoque" notfications={""} />
            
            <div className="contant-body" onLoad={ () => setLoadPage( true ) }>
                <div className="container-search">

                    <Search 
                        onChangeSelect={ e => setCampo( e.target.value ) } 
                        onChangeInput={ e => setPesquisa( e.target.value ) }
                        onClick={ () => handleFilter() }
                        renderOptions={(
                            <>
                                <option value="num_started" >Numero de Entrada</option>
                                <option value="client" >Clientes</option>
                                <option value="ref" >Referência</option>
                                <option value="type_fabric" >Tipo de Tecido</option>
                                <option value="color_fabric" >Cor do Tecido</option>
                            </>
                        )}
                    />

                    <Button to="/add-storage">
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
                    <TabContant id="Todos">
                        <table className="container-table">
                            <thead>
                                <tr className="header-table">
                                    <td className="col-id">
                                        ID
                                    </td>
                                    <td className="col started">
                                        Entrada
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

                            <tbody id="storage" className="container-table-body" />
                            
                        </table>
                    </TabContant>
                    <TabContant id="Clientes">
                        <h1>
                            Estoque de Clientes
                        </h1>
                    </TabContant>
                    <TabContant id="Fabrica">
                        <h1>
                            Estoque da fábrica
                        </h1>
                    </TabContant>
                </TabsContainer>
            </div>
        </div>
    )
}