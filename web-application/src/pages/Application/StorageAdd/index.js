import React, { useState } from 'react';
import { FiPrinter } from 'react-icons/fi';

import api from '../../../services/api';

import { 
    Header, 
    Dropdown, 
    Inputs, 
    Separator, 
    Button,
    TextButton
} from '../../../components'

import './styles.css';
import { useHistory } from 'react-router';

export default function StorageAdd () {
    const [ count, setCount ] = useState(1)
    const [ typeService, setTypeService ] = useState('')
    const [ client, setClient ] = useState('')
    const [ note, setNote ] = useState('')
    const [ typeUnit, setTypeUnit ] = useState('')
    const [ typeFabric, setTypeFabric ] = useState('')
    const [ colorFabric, setColorFabric ] = useState('')

    const history = useHistory()

    function addRows() {
        let tableStorage = document.getElementById("add-storage");

        tableStorage.insertAdjacentHTML( 'beforebegin' , 
            `<tr id="dataRows" name="dataRows" class="table-rows" >
                <td class="col roll">
                    <input
                        value=${ count }
                        name='input-${ count }'
                        class="col roll"
                        type="number"
                        disabled
                    />
                </td>
                <td class="col reference">
                    <input
                        name='input-${ count }'
                        class="col reference"
                        type="text"
                    />
                </td>
                <td class="col description">
                    <input
                        name='input-${ count }'
                        class="col description"
                        type="text" 
                    />
                </td>
                <td class="col width-grid">
                    <input
                        name='input-${ count }'
                        class="col width-grid"
                        type="number" 
                    />
                </td>
                <td class="col metric-unid">
                    <input
                        name='input-${ count }'
                        class="col metric-unid"
                        type="number" 
                    />
                </td>
                <td class="col review">
                    <select
                        name='select'
                        class="col review"
                    >
                        <option value="não" selected > Não </option>
                        <option value="sim" > Sim </option>
                </td>
                <td class="col action"/>
            </tr> `
        )
        setCount( count + 1 )
    }
    
    function handleSave () {
        let row = document.getElementsByName('dataRows');
        
        row.forEach( value => {
            const inputs = value.getElementsByTagName('input')
            const select = value.getElementsByTagName('select')

            api('storage').push({
                date_started : new Date().toLocaleString(),
                type_service : typeService,
                client : client,
                note : note,
                type_unit: typeUnit.toUpperCase(),
                type_fabric : typeFabric.toUpperCase(),
                color_fabric : colorFabric.toUpperCase(),

                roll : inputs[0].valueAsNumber,
                reference : inputs[1].value.toUpperCase(),
                description : inputs[2].value,
                width_grid : inputs[3].valueAsNumber,
                metric_unid : inputs[4].valueAsNumber,
                review : select[0].value.toUpperCase()
            })
        })

        alert("Entrada registrada com sucesso!")

        history.push('/storage');
    }

    return(
        <>
            <Header
                title="Entrada"
                goBack
            />

            <div className="body">
                <div 
                    className="container-inputs"
                >
                    <div>
                        <Dropdown 
                            label="Tipo de entrada"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                            onChange={ event => setTypeService( event.target.value ) }
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
                            value={ client }
                            onChange={ event => setClient( event.target.value ) }
                            placeholder="ex: Tray Connect"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                        <Inputs 
                            label="OC / Nota Fiscal"
                            type="text"
                            value={ note }
                            onChange={ event => setNote( event.target.value ) }
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
                            onChange={ event => setTypeUnit( event.target.value ) }
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
                            value={ typeFabric }
                            onChange={ event => setTypeFabric( event.target.value ) }
                            placeholder="ex: Tactel"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                        <Inputs 
                            label="Cor do Tecido"
                            type="text"
                            value={ colorFabric }
                            onChange={ event => setColorFabric( event.target.value ) }
                            placeholder="ex: Branco"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                    </div>
                </div>

                <Separator marginVertical={ "16px" } />

                <table className="container-table innershadow">
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
                    <tbody className="add-storage container-table-body">
                        <tr id="add-storage" class="table-rows" >
                            <button onClick={ () => addRows() }>
                                Adicionar nova linha
                            </button>
                        </tr>
                    </tbody>
                </table>

                <div style={{ alignItems: 'center', maxHeight: 'fit-content' }}>
                    <TextButton
                        center
                        marginHorizontal={'8px'}
                        marginVertical={'16px'}
                        text={(
                            <>
                                <FiPrinter size={18} style={{ marginRight: "22px" }} />
                                Imprimir etiquetas
                            </>
                        )}
                    />
                    
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