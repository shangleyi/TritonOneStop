import * as firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyC1VDQFaNAR0KfEkeGOzsvn8Tjgu9pSZuY",
    authDomain: "tostest1-5e30d.firebaseapp.com",
    databaseURL: "https://tostest1-5e30d.firebaseio.com",
    projectId: "tostest1-5e30d",
    storageBucket: "tostest1-5e30d.appspot.com",
    messagingSenderId: "361688524473",
    appId: "1:361688524473:web:00abbd313778b3dc2a5d68",
    measurementId: "G-6353F9VP82"
});

const db = firebase.firestore();

export default db;