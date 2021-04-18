import React from 'react';

import { 
    Header,
    Footer,
    TabButton,
    TabContant, 
    TabsContainer,
    Button
} from '../../../components';

import './styles.css';

export default function Storage () {

    return (
        <div className="body container-storage">
            <Header title="Estoque" notfications={""} />
            
            <div className="contant-body">
                <Button onClick={ () => {} } />

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