import React from 'react';
import { FiBell } from 'react-icons/fi';
import version from '../../../../package.json';

import { Separator, TextButton } from '../../../components';

import './styles.css';

export default function Storage () {
    return (
        <div className="body">
            <header className="container-header">
                <div style={{ width : "100%", justifyContent: "space-between" }} >
                    <div className="title">
                        <h2>
                            Estoque
                        </h2>
                    </div>
                    <div className="notification">
                        <FiBell size={16}/>
                    </div>
                </div>
                <Separator />
            </header>
            
            <div className="contant-body">
                Toexto
            </div>

            <footer className="container-footer">
                <Separator />
                <div style={{ width : "100%", justifyContent: "space-between" }} >
                    <div className="container-left">
                        <div className="container-copyright">
                            © 2020 - 2021 | Tray Connect Inc.
                        </div>
                        <div className="container-user">
                            <TextButton to="#" text="User Name" />
                        </div>
                    </div>
                    <div className="container-right">
                        <div className="container-version">
                            Versão{" - "}{ version.version }
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}