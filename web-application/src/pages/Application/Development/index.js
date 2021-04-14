import React from 'react';

import { 
    Header,
    Footer,
    TabButton,
    TabContant, 
    TabsContainer
} from '../../../components';

import './styles.css';

export default function Development () {
    setTimeout( 
        () => document.getElementById('default').click(), //Função
        30 //Timer
    )

    return (
        <div className="body">
            <Header title="Desenvolvimento" notfications={""} />
            
            <div className="contant-body">
                <TabsContainer 
                renderButtons={
                    <>
                        <TabButton text="Todos" id="default" />
                        <TabButton text="Clientes" />
                        <TabButton text="Studio" />
                    </>
                }>
                    <TabContant id="Todos">
                        <table id="table-data" className="container-table">
                            <tbody className="container-table-body">
                                <tr className="header-table">
                                    <td style={{ display : 'none' }} className="col-id">
                                        id
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
                                    <td className="col status">
                                        Status
                                    </td>
                                    <td className="col designer">
                                        Designer
                                    </td>
                                </tr>
                                <tr className="table-rows">
                                    <td style={{ display : 'none' }} className="col-id">
                                        id
                                    </td>
                                    <td className="col date-started">
                                        22/04/2020
                                    </td>
                                    <td className="col client">
                                        Claudinho e Bochecha
                                    </td>
                                    <td className="col reference">
                                        SFS32
                                    </td>
                                    <td className="col description">
                                        -
                                    </td>
                                    <td className="col status">
                                        Aguardando
                                    </td>
                                    <td className="col designer">
                                        -
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </TabContant>
                    <TabContant id="Clientes">
                        <h1>
                            Estampas de Clientes
                        </h1>
                    </TabContant>
                    <TabContant id="Studio">
                        <h1>
                            Estampas da fábrica
                        </h1>
                    </TabContant>
                </TabsContainer>
                
            </div>

            <Footer user={"Fulano Pregador"} />
        </div>
    )
}