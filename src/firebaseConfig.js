import firebase from 'firebase/app'

import "firebase/firestore"

const miConfiguracion = {
    apiKey: "AIzaSyCqYDH8eK1GqyoQrqhy8vT4tBgaDdMsjK8",
    authDomain: "e-commerce-886ec.firebaseapp.com",
    projectId: "e-commerce-886ec",
    storageBucket: "e-commerce-886ec.appspot.com",
    messagingSenderId: "1025233311035",
    appId: "1:1025233311035:web:e4eecc21cd6bcad375531e"
  };

const app = firebase.initializeApp(miConfiguracion)

export const Firestore = firebase.firestore(app)