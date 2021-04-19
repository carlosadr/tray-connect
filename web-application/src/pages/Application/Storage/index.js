import React from 'react';
import firebase from 'firebase';
import 'firebase/auth'

import { FiSearch } from 'react-icons/fi'

import { 
    Header,
    Footer,
    TabButton,
    TabContant, 
    TabsContainer,
    Button
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
    const uid = firebase.auth().currentUser.uid
    const ref = firebase.database().ref(`superusers/${uid}/company`)
    const companyName = localStorage.getItem("companyName")
    
    setTimeout( () => document.getElementById('default').click(), 30 )
    
    ref.child(companyName).child('storage').on('value', snapshot => {
        setTimeout(() => {
            let tableStorage = document.getElementById("storage");
            tableStorage.innerHTML = "";

            snapshot.forEach( item => {
                let key = item.key;
                let value = item.val()
                
                tableStorage.insertAdjacentHTML( 'beforeend', Rows( key, value ))
            })
        }, 50) 
    })
    
    function handleAddRows () {
        ref.child(companyName).child('storage').push({
            num_started : 554,
            roll : 2,
            date_started : new Date().getUTCDate(),
            client : "Dissole",
            ref : "S5403_V2",
            description : "-",
            type_unit : "MT",
            type_fabric : "Crepe Barbie",
            color_fabric : "Off White",
            width_grid : 1.54,
            quant : 55.5,
            review : "Não"
        })
    }

    return (
        <div className="body container-storage">
            <Header title="Estoque" notfications={""} />
            
            <div className="contant-body">
                <div className="container-search">
                    <section className="component-search" >
                        <input className="search-input" type="text" placeholder="Pesquise aqui."/>
                        <button className="search-button" onClick={ () => {} }>
                            <FiSearch size={18} color={"#FAFAFC"} />
                        </button>
                    </section>
                    <Button onClick={ () => handleAddRows() }>
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
                            <thead className="header-table">
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
                            </thead>
                            <tbody id="storage" className="container-table-body">
                                
                            </tbody>
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

            <Footer />
        </div>
    )
}