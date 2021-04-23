import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/auth'

import { 
    Header,
    TabButton,
    TabContant, 
    TabsContainer,
    Button,
    Search,
    Modal,
    Inputs,
    Separator,
    Dropdown
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
                ${ value.ref }
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
                ${ value.quant }
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
    // Captura o UID (ou ID) do usuario autenticado com Firebase;
    const uid = firebase.auth().currentUser.uid
    // Constante de referencia para rota mestre;
    const ref = firebase.database().ref(`superusers/${uid}/company`)
    // Captura do localStorage a variavel com nome da empresa do usuario autenticado;
    const companyName = localStorage.getItem("companyName")

    const [ pesquisa, setPesquisa ] = useState("");
    const [ campo, setCampo ] = useState("");
    const [ openModal, setOpenModal ] = useState( false )

    //Iguinora kkkk
    setTimeout( () => document.getElementById('default').click(), 30 )
    
    // Funçao que chama os valores de dentro do Estoque (storage) da Empresa (companyName)
    ref.child(companyName).child('storage').on('value', snapshot => {
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
        }, 50) 
    })

    function handleFilter( ) {
        if ( pesquisa ) {
            ref.child(companyName).child('storage').orderByChild( campo ).equalTo( pesquisa ).on("value", snapshot => {
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
    
    function handleOpenAddRows () {
        openModal ? setOpenModal(false) : setOpenModal( true )
    }

    return (
        <div className="body container-storage">
            <Header title="Estoque" notfications={""} />
            
            <div className="contant-body">
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

                    <Button onClick={ () => handleOpenAddRows() }>
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
                

                <Modal
                    title="Titulo Modal"
                    showModal={ openModal }
                    onClick={ () => handleOpenAddRows() }
                >
                    <div style={{ flexDirection: "column" }}>
                        <div>
                            <Dropdown 
                                label="Tipo de entrada"
                                marginHorizontal={ "8px" }
                                marginVertical={ "8px" }
                                options={(
                                    <>
                                        <option value="service" >Prestação de serviço</option>
                                        <option value="sell_fabric" >Venda de tecidos</option>
                                    </>
                                )}
                            />
                            <Inputs 
                                label="Cliente"
                                type="text"
                                value={""}
                                placeholder="ex: Tray Connect"
                                marginHorizontal={ "8px" }
                                marginVertical={ "8px" }
                            />
                            <Inputs 
                                label="OC / Nota Fiscal"
                                type="text"
                                value={""}
                                placeholder="ex: 1450022"
                                marginHorizontal={ "8px" }
                                marginVertical={ "8px" }
                            />
                        </div>
                        <div>
                            <Dropdown 
                                label="Unidade"
                                marginHorizontal={ "8px" }
                                marginVertical={ "8px" }
                                options={(
                                    <>
                                        <option value="mt" >Metros</option>
                                        <option value="unit" >Peças</option>
                                    </>
                                )}
                            />
                            <Inputs 
                                label="Nome do Tecido"
                                type="text"
                                value={""}
                                placeholder="ex: Tactel"
                                marginHorizontal={ "8px" }
                                marginVertical={ "8px" }
                            />
                            <Inputs 
                                label="Cor do Tecido"
                                type="text"
                                value={""}
                                placeholder="ex: Branco"
                                marginHorizontal={ "8px" }
                                marginVertical={ "8px" }
                            />
                        </div>
                    </div>

                    <Separator marginVertical={ "16px" } />

                    <table className="container-table">
                        <thead>
                            <tr className="add-storage header-table">
                                <td className="col roll">
                                    Rolo
                                </td>
                                <td className="col reference">
                                    Referencia
                                </td>
                                <td className="col description">
                                    Descrição
                                </td>
                                <td className="col width-grid">
                                    Largura / Grade
                                </td>
                                <td className="col metric-unid">
                                    Quantidade
                                </td>
                                <td className="col review">
                                    Revisado
                                </td>
                                <td className="col actions">
                                    Ações
                                </td>
                            </tr>
                        </thead>
                        <tbody id="add-storage" className="add-storage container-table-body">
                            <tr class="table-rows" >
                                <td className="col roll">
                                    <input 
                                        id="" 
                                        defaultValue={1}
                                        className="col roll"
                                        type="number"
                                        disabled
                                    />
                                </td>
                                <td className="col reference">
                                    <input 
                                        id="" 
                                        className="col reference"
                                        type="text" 
                                    />
                                </td>
                                <td className="col description">
                                    <input 
                                        id="" 
                                        className="col description"
                                        type="text" 
                                    />
                                </td>
                                <td className="col width-grid">
                                    <input 
                                        id="" 
                                        className="col width-grid"
                                        type="number" 
                                    />
                                </td>
                                <td className="col metric-unid">
                                    <input 
                                        id="" 
                                        className="col metric-unid"
                                        type="number" 
                                    />
                                </td>
                                <td className="col review">
                                    <input 
                                        id="" 
                                        className="col review"
                                        type="text" 
                                    />
                                </td>
                                <td className="col actions"/>
                            </tr>

                            <tr class="table-rows" >
                                <button>
                                    Adicionar nova linha
                                </button>
                            </tr>
                        </tbody>
                    </table>
                </Modal>
            </div>
        </div>
    )
}