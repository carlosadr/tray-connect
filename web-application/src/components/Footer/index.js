import React, { useState, useEffect } from 'react';
import version from '../../../package.json';

import firebase from 'firebase'
import 'firebase/auth'

import { Separator, TextButton } from '../';

import './styles.css';

function Footer() {
    const uid = firebase.auth().currentUser.uid;
    const [user, setUser] = useState("")

    async function getUserData() {

        await firebase.database().ref(`superusers/${uid}`)
        .once('value')
        .then( snapshot => setUser( 
            !snapshot.child('name').val() ? "Usuário" : //Default Value
            snapshot.child('name').val() //Get Value in Data.
        ))
        .catch( error => console.error( error ) )
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
                            © 2020 - 2021 | Tray Connect Inc.
                        </div>
                        <div className="container-user">
                            <TextButton to="#" text={ user } />
                        </div>
                    </div>
                    <div className="container-right">
                        <div className="container-version">
                            Versão{"  "}{ version.version }
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;