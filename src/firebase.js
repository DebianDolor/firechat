import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCJ5nu5dD4owZx6EEXColOeKyo1J_2sYJA",
    authDomain: "chat-app-54047.firebaseapp.com",
    projectId: "chat-app-54047",
    storageBucket: "chat-app-54047.appspot.com",
    messagingSenderId: "1031210117262",
    appId: "1:1031210117262:web:fb1889e67b77f574c4c1df",
  })
  .auth();
