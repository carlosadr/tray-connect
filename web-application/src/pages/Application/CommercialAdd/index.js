import React, { useState, useEffect } from 'react';
import { FiPlus, FiPrinter } from 'react-icons/fi';

import {
    Button,
    Dropdown,
    Header,
    Inputs,
    Modal,
    Search,
    Separator,
    TextButton
} from '../../../components';
import api from '../../../services/api';

import './styles.css';

export default function CommercialAdd() {
    const [ modal, setModal ] = useState(false);

    // Data values and keys Storage
    const [ keys, setKeys ] = useState(new Array([]));
    const [ values, setValues ] = useState(new Array([]));

    // Data objects in Order
    const [ dataOrders, setDataOrders ] = useState(new Array([]));
    const [ keysOrders, setKeysOrders ] = useState(new Array([]));

    // Campos para filtragem
    const [ campo, setCampo ] = useState("");
    const [ text, setText ] = useState("");

    useEffect(() => {
        let ref;

        if( text !== "" ) {
            switch ( campo ) {
                case "batch" :
                ref = api('storage').orderByChild( "batch" )
                .startAt( parseInt( text ) )
                .endAt( parseInt( text ) )
                break;
    
                case "client": 
                ref = api('storage').orderByChild( campo )
                .startAt( `${ text.toUpperCase() }` )
                .endAt( `${ text.toUpperCase() }\uf8ff` )
                break
    
                default : return;
            }
        } else {
            ref = api('storage')
        }

        ref.once("value", snapshot => {
            let dataKeys = new Array([])
            let dataValues = new Array([])
            let i = 0;

            console.log( snapshot.exportVal() )
            
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
    }, [ campo, text ])

    function addRollsInOrder ( ) {
        console.log( keysOrders )
        console.log( dataOrders )
        dataOrders.forEach( ( item, index ) => {
            api(`orders/${keysOrders[index]}` ).set( item )
            api(`orders/${keysOrders[index]}` ).remove()
        })
    }

    return (
        <>
            <Header title="Adicionar ordens" goBack />

            <Modal
                title="Adicionar Rolos"
                showModal={modal}
                onClick={() => setModal(!modal)}>

                <Search 
                    type={ campo === 'batch' ? "number" : "text" }
                    onChangeSelect={ e => { setCampo( e.target.value ); setText("") } }
                    onChangeInput={ e => setText( e.target.value ) }
                >
                    <option value="batch">Lote</option>
                    <option value="client">Cliente</option>
                </Search>

                <Separator marginVertical={16} />
                
                <table className="body-data inner-shadow">
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
                        {values.map((value, index) => {
                            if (value.length !== 0) {
                                return (
                                    <tr key={keys[index]} className="table-rows" >
                                        <td className="col started">
                                            {value.batch}
                                        </td>
                                        <td className="col roll">
                                            {value.roll}
                                        </td>
                                        <td className="col date-started">
                                            {value.date_started}
                                        </td>
                                        <td className="col client">
                                            {value.client}
                                        </td>
                                        <td className="col reference">
                                            {value.reference}
                                        </td>
                                        <td className="col description">
                                            {value.description}
                                        </td>
                                        <td className="col type">
                                            {value.type_unit}
                                        </td>
                                        <td className="col type-fabtic">
                                            {value.type_fabric}
                                        </td>
                                        <td className="col color-fabric">
                                            {value.color_fabric}
                                        </td>
                                        <td className="col width-grid">
                                            {value.width_grid}
                                        </td>
                                        <td className="col metric-unid">
                                            {value.metric_unid}
                                        </td>
                                        <td className="col review">
                                            {value.review}
                                        </td>
                                        <td className="col actions">
                                            <button 
                                                className="plus" 
                                                onClick={ () => {
                                                    setKeysOrders( dataOrders[0].length < 1  ? [ keys[index] ] : [ ...keysOrders, keys[index] ])
                                                    setDataOrders( dataOrders[0].length < 1  ? [ value ] : [ ...dataOrders, value ])
                                                }}>
                                                <FiPlus size={22} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                            return null;
                        })
                        }
                    </tbody>
                </table>

                <div style={{ alignItems : 'center' }} >
                    <TextButton onClick={ () => {} }  text="Cancelar" center/>
                    <Button onClick={ () => addRollsInOrder() }> Adicionar </Button>
                </div>
                
            </Modal>

            <div className="body">
                <div
                    className="container-inputs"
                >
                    <div>
                        <Dropdown
                            label="Tipo de entrada"
                            marginHorizontal={"8px"}
                            marginVertical={"8px"}
                            // onChange={ event => setTypeService( event.target.value ) }
                            options={(
                                <>
                                    <option value="service" >Prestação de serviço</option>
                                    <option value="fabric" >Venda de tecidos</option>
                                </>
                            )}
                        />
                        <Inputs
                            label="Cliente"
                            type="text"
                            // value={ client }
                            // onChange={ event => setClient( event.target.value ) }
                            placeholder="ex: Tray Connect"
                            marginHorizontal={"8px"}
                            marginVertical={"8px"}
                        />
                    </div>
                </div>

                <Separator marginVertical={"16px"} />

                <table className="inner-shadow">
                    <thead>
                        <tr className="add-order header-table">
                            <td className="col batch">
                                Lote
                            </td>
                            <td className="col roll">
                                Rolo
                            </td>
                            <td className="col roll">
                                OC / Nota Fiscal
                            </td>
                            <td className="col reference">
                                Referência
                            </td>
                            <td className="col description">
                                Descrição
                            </td>
                            <td className="col type-fabric">
                                Nome do tecido
                            </td>
                            <td className="col width-grid">
                                Tipo
                            </td>
                            <td className="col width-grid">
                                Largura / Grade
                            </td>
                            <td className="col metric-unid">
                                Quantidade
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {valuesOrders.map((value, index) => {
                            if (value.length !== 0) {
                                return (
                                    <tr key={keysOrders[index]} className="table-rows" >
                                        <td className="col started">
                                            {value.batch}
                                        </td>
                                        <td className="col roll">
                                            {value.roll}
                                        </td>
                                        <td className="col date-started">
                                            {value.date_started}
                                        </td>
                                        <td className="col client">
                                            {value.client}
                                        </td>
                                        <td className="col reference">
                                            {value.reference}
                                        </td>
                                        <td className="col description">
                                            {value.description}
                                        </td>
                                        <td className="col type">
                                            {value.type_unit}
                                        </td>
                                        <td className="col type-fabtic">
                                            {value.type_fabric}
                                        </td>
                                        <td className="col color-fabric">
                                            {value.color_fabric}
                                        </td>
                                        <td className="col width-grid">
                                            {value.width_grid}
                                        </td>
                                        <td className="col metric-unid">
                                            {value.metric_unid}
                                        </td>
                                        <td className="col review">
                                            {value.review}
                                        </td>
                                        <td className="col actions">
                                            <button className="plus" onClick={() => { }}>
                                                <FiPlus size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                            return null;
                        })
                        } */}
                    </tbody>
                </table>

                <div style={{ flex: 0, alignItems: 'center', maxHeight: 'fit-content' }}>
                    <TextButton
                        center
                        marginHorizontal={8}
                        marginVertical={16}
                        text={(
                            <>
                                <FiPrinter size={18} style={{ marginRight: "22px" }} />
                                Imprimir folhas
                            </>
                        )}
                    />

                    <TextButton
                        center
                        marginHorizontal={8}
                        marginVertical={16}
                        onClick={() => setModal(!modal)}
                        text={(
                            <>
                                <FiPlus size={18} style={{ marginRight: "22px" }} />
                                Adicionar rolos
                            </>
                        )}
                    />

                    <Button
                        marginHorizontal={8}
                        marginVertical={16}
                    // onClick={ () => handleSave() }
                    >
                        Salvar
                    </Button>
                </div>
            </div>
        </>
    )
}