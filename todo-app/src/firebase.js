// const firebaseConfig = {
    
// };

import firebase, { database } from "firebase";
 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3-vM5cy5WqIaJttgK62C5MqsivVrMPPU",
    authDomain: "todo-list-670b5.firebaseapp.com",
    databaseURL: "https://todo-list-670b5.firebaseio.com",
    projectId: "todo-list-670b5",
    storageBucket: "todo-list-670b5.appspot.com",
    messagingSenderId: "899223146067",
    appId: "1:899223146067:web:8a18f8ba058ae9e9b7c0a6",
    measurementId: "G-EWJSWJ9RB2"
});

const db = firebaseApp.firestore();

export default db ;

