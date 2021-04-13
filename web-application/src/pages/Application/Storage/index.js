import React from 'react';

import { 
    Header,
    Footer
} from '../../../components';

import './styles.css';

export default function Storage () {
    return (
        <div className="body">
            <Header title="Estoque" notfications={""} />
            
            <div className="contant-body">
                Toexto
            </div>

            <Footer user={"Fulano Pregador"} />
        </div>
    )
}