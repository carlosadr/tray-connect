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
                        <h1>
                            TODOS ELEMENTOS
                        </h1>
                    </TabContant>
                    <TabContant id="Clientes">
                        <h1>
                        CLIENTES
                        </h1>
                    </TabContant>
                    <TabContant id="Fabrica">
                        <h1>
                        ESTOQUE de Fabrica
                        </h1>
                    </TabContant>
                </TabsContainer>
                
            </div>

            <Footer user={"Fulano Pregador"} />
        </div>
    )
}