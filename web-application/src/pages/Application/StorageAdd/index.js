import React from 'react';

import { 
    Header, 
    Dropdown, 
    Inputs, 
    Separator 
} from '../../../components'

import './styles.css';

export default function StorageAdd () {
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

            </div>
        </>
    )
}