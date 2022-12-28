import firebase from "firebase/app";
import 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeIPYIRA0fbKjXNMp3jXTm1j-UNf2mlC0",
  authDomain: "riki-ce083.firebaseapp.com",
  projectId: "riki-ce083",
  storageBucket: "riki-ce083.appspot.com",
  messagingSenderId: "103742973968",
  appId: "1:103742973968:web:70aec2e31065cb8d3a0295"
};

const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BHsKbpmZjr_a1XDK6_xGzEnG23CBL_ElFNJEogCjtW3e-jzBdV4iL4kZ12SwcpmLlC3imtyXJC8RyyVZ_QpUO04'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}



// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);