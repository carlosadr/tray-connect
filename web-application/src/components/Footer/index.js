import React, { useState, useEffect } from 'react';
import packageJson from '../../../package.json';

import api from '../../services/api'
import firebase from 'firebase'

import { Separator, TextButton } from '../';

import './styles.css';

function Footer() {
    const [ uid ] = useState(firebase.auth().currentUser.uid)
    const [ user, setUser ] = useState("")

    async function getUserData() {
        api('users').once('value', snapshot => {
            setUser( snapshot.child( uid ).child('displayName').val() )
        })
    }

    useEffect(() =>{
        getUserData();
    })

    return(
        <>
            <footer className="container-footer">
                <Separator />
                <div style={{ width : "100%", justifyContent: "space-between" }} >
                    <div className="container-left">
                        <div className="container-copyright">
                            © 2020 - { new Date().getFullYear() } | Tray Connect Inc.
                        </div>
                        <div className="container-user">
                            <TextButton to="profile" text={ user } />
                        </div>
                    </div>
                    <div className="container-right">
                        <div className="container-version">
                            Versão{"  "}{ packageJson.version }
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;