import * as firebase from "firebase";

const db_login = firebase.initializeApp({
    apiKey: "AIzaSyCMV9qy-nDCVWb3v032HL4d2miCv_QcdaY",
    authDomain: "tos-login-testing.firebaseapp.com",
    databaseURL: "https://tos-login-testing.firebaseio.com",
    projectId: "tos-login-testing",
    storageBucket: "tos-login-testing.appspot.com",
    messagingSenderId: "350853688425",
    appId: "1:350853688425:web:64747999ebf45a0a5946f8"
});

export default db_login;