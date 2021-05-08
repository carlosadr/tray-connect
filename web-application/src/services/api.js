import firebase from 'firebase';
import firebaseApp from "firebase/app";
import 'firebase/auth'

// Configuraçoes do firebase.
firebaseApp.initializeApp({
    apiKey: "AIzaSyAYgDIgDlUF2GoleDUnmNX4Vt7_gOCKXyk",
    authDomain: "tray-connect-systems.firebaseapp.com",
    databaseURL: "https://tray-connect-systems-default-rtdb.firebaseio.com",
    projectId: "tray-connect-systems",
    storageBucket: "tray-connect-systems.appspot.com",
    messagingSenderId: "3344673671",
    appId: "1:3344673671:web:5f28412bdbc292dbb78122",
    measurementId: "G-1V8K3SHQ8S"
});

export default function api ( value ) {
    // Captura o UID (ou ID) do usuario autenticado com Firebase;
    const uid = firebase.auth().currentUser.uid
    // Constante de referencia para rota mestre;
    const ref = firebase.database().ref(`superusers/${uid}/company`)
    // Captura do localStorage a variavel com nome da empresa do usuario autenticado;
    const companyName = localStorage.getItem("companyName")

    // Retorna função para utilizaçao do realtime-database;
    return ref.child(companyName).child(value)
}

export function storage ( value ) {
    // Captura o UID (ou ID) do usuario autenticado com Firebase;
    const uid = firebase.auth().currentUser.uid
    // Constante de referencia para rota mestre;
    const ref = firebase.storage().ref(`superusers/${uid}/company`)
    // Captura do localStorage a variavel com nome da empresa do usuario autenticado;
    const companyName = localStorage.getItem("companyName")

    // Retorna função para utilizaçao do realtime-database;
    return ref.child(companyName).child(value)
}

export function user () {
    return firebase.auth().currentUser ;
}