import React from 'react';
import version from '../../../package.json';

import { Separator, TextButton } from '../';

import './styles.css';

function Footer({ user }) {
    return(
        <>
            <footer className="container-footer">
                <Separator />
                <div style={{ width : "100%", justifyContent: "space-between" }} >
                    <div className="container-left">
                        <div className="container-copyright">
                            © 2020 - 2021 | Tray Connect Inc.
                        </div>
                        <div className="container-user">
                            <TextButton to="#" text={ user } />
                        </div>
                    </div>
                    <div className="container-right">
                        <div className="container-version">
                            Versão{" - "}{ version.version }
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;