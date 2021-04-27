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

export default function StorageAdd () {
    const [ count, setCount ] = useState(1)

    function addRows() {

        api('storage')

        let tableStorage = document.getElementById("add-storage");

        tableStorage.insertAdjacentHTML( 'beforebegin' , 
            `<tr class="table-rows" >
                <td class="col roll">
                    <input 
                        id=""
                        value=${ count }
                        class="col roll"
                        type="number"
                        disabled
                    />
                </td>
                <td class="col reference">
                    <input 
                        id="" 
                        class="col reference"
                        type="text" 
                    />
                </td>
                <td class="col description">
                    <input 
                        id="" 
                        class="col description"
                        type="text" 
                    />
                </td>
                <td class="col width-grid">
                    <input 
                        id="" 
                        class="col width-grid"
                        type="number" 
                    />
                </td>
                <td class="col metric-unid">
                    <input 
                        id="" 
                        class="col metric-unid"
                        type="number" 
                    />
                </td>
                <td class="col review">
                    <input 
                        id="" 
                        class="col review"
                        type="text" 
                    />
                </td>
                <td class="col actions"/>
            </tr> `
        )
        setCount( count + 1 )
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
                    >
                        Salvar
                    </Button>
                </div>
            </div>
        </>
    )
}