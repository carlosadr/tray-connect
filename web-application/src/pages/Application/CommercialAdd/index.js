import React, { useState } from 'react';
import { FiPrinter, FiTrash2 } from 'react-icons/fi';
import { Button, Dropdown, Header, Inputs, Separator, TextButton } from '../../../components';

import './styles.css';

export default function CommercialAdd () {
    const [ line, setLine ] = useState([]);

    return (
        <>
            <Header title="Adicionar ordens" goBack />

            <div className="body">
                <div 
                    className="container-inputs"
                >
                    <div>
                        <Dropdown 
                            label="Tipo de entrada"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
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
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                        <Inputs 
                            label="OC / Nota Fiscal"
                            type="text"
                            // value={ note }
                            // onChange={ event => setNote( event.target.value ) }
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
                            // onChange={ event => setTypeUnit( event.target.value ) }
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
                            // value={ typeFabric }
                            // onChange={ event => setTypeFabric( event.target.value ) }
                            placeholder="ex: Tactel"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                        <Inputs 
                            label="Cor do Tecido"
                            type="text"
                            // value={ colorFabric }
                            // onChange={ event => setColorFabric( event.target.value ) }
                            placeholder="ex: Branco"
                            marginHorizontal={ "8px" }
                            marginVertical={ "8px" }
                        />
                    </div>
                </div>

                <Separator marginVertical={ "16px" } />

                <table className="container-table inner-shadow">
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
                            <td className="col type-fabric">
                                Nome do tecido
                            </td>
                            <td className="col width-grid">
                                Largura / Grade
                            </td>
                            <td className="col metric-unid">
                                Quantidade
                            </td>
                        </tr>
                    </thead>
                    <tbody id='tbody' className="add-storage container-table-body">
                        { line.map( ( value ) => {
                            return (
                                <tr id="dataRows" name="dataRows" class="table-rows" >
                                    <td className="col roll">
                                        <input
                                            value={ value }
                                            name={`input-${ value }`}
                                            className="col roll"
                                            type="number"
                                            disabled
                                        />
                                    </td>
                                    <td className="col reference">
                                        <input
                                            name={ `input-${ value }` }
                                            className="col reference"
                                            type="text"
                                        />
                                    </td>
                                    <td className="col description">
                                        <input
                                            name={`input-${ value }`}
                                            className="col description"
                                            type="text" 
                                        />
                                    </td>
                                    <td className="col type-fabric">
                                        <input
                                            name={`input-${ value }`}
                                            className="col type-fabric"
                                            type="number" 
                                        />
                                    </td>
                                    <td className="col width-grid">
                                        <input
                                            name={`input-${ value }`}
                                            className="col width-grid"
                                            type="number" 
                                        />
                                    </td>
                                    <td className="col metric-unid">
                                        <input
                                            name={`input-${ value }`}
                                            className="col metric-unid"
                                            type="number" 
                                        />
                                    </td>
                                </tr>
                            )})
                        }
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