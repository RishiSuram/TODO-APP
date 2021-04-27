// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDNL4FYh9BWkVGXAnUHzcKRrhXvXjw9Moo",
//     authDomain: "todo-app-cp-abca2.firebaseapp.com",
//     projectId: "todo-app-cp-abca2",
//     storageBucket: "todo-app-cp-abca2.appspot.com",
//     messagingSenderId: "82103461092",
//     appId: "1:82103461092:web:8331293a85d7b9f913b8f1",
//     measurementId: "G-9RZVD3M2W3"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDNL4FYh9BWkVGXAnUHzcKRrhXvXjw9Moo",
    authDomain: "todo-app-cp-abca2.firebaseapp.com",
    projectId: "todo-app-cp-abca2",
    storageBucket: "todo-app-cp-abca2.appspot.com",
    messagingSenderId: "82103461092",
    appId: "1:82103461092:web:8331293a85d7b9f913b8f1",
    measurementId: "G-9RZVD3M2W3"
  });

const db = firebaseApp.firestore();

export default db;


