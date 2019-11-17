import * as firebase from "firebase";

const config = firebase.initializeApp({
    apiKey: "AIzaSyAz3Tk9qQREeBaTv-SucTtQL_OlyPu7o0E",
    authDomain: "backendtest-fe485.firebaseapp.com",
    databaseURL: "https://backendtest-fe485.firebaseio.com",
    projectId: "backendtest-fe485",
    storageBucket: "backendtest-fe485.appspot.com",
    messagingSenderId: "945281875070",
    appId: "1:945281875070:web:155c48682fab5eeb056c2f",
    measurementId: "G-WEDPF5M5N4"
});

firebase.initializeApp(config);
const db = firebase.database();
export default db;