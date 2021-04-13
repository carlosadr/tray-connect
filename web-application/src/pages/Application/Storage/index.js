import React from 'react';

import { 
    Header,
    Footer,
    TabButton,
    TabContant, 
    TabsContainer
} from '../../../components';

import './styles.css';

export default function Storage () {
    return (
        <div className="body">
            <Header title="Estoque" notfications={""} />
            
            <div className="contant-body">
                <TabsContainer 
                renderButtons={
                    <>
                        <TabButton text="Todos" />
                        <TabButton text="Clientes" />
                        <TabButton text="Fabrica" />
                    </>
                }>
                    <TabContant id="Todos">
                        <table id="table-data" className="container-table">
                            <tbody className="container-table-body">
                                <tr className="header-table">
                                    <td style={{ display : 'none' }} className="col-id">
                                        id
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
                                <tr className="table-rows">
                                    <td style={{ display : 'none' }} className="col-id">
                                        id
                                    </td>
                                    <td className="col started">
                                        5542
                                    </td>
                                    <td className="col roll">
                                        1
                                    </td>
                                    <td className="col date-started">
                                        22/04/2020
                                    </td>
                                    <td className="col client">
                                        Claudinho e Bochecha
                                    </td>
                                    <td className="col reference">
                                        SGS220
                                    </td>
                                    <td className="col description">
                                        -
                                    </td>
                                    <td className="col type">
                                        MT
                                    </td>
                                    <td className="col type-fabtic">
                                        Tactel
                                    </td>
                                    <td className="col color-fabric">
                                        Branco
                                    </td>
                                    <td className="col width-grid">
                                        1.60
                                    </td>
                                    <td className="col metric-unid">
                                        240
                                    </td>
                                    <td className="col review">
                                        Não
                                    </td>
                                    <td className="col actions">
                                        Editar  |   Excluir
                                    </td>
                                </tr>
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

            <Footer user={"Fulano Pregador"} />
        </div>
    )
}