import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjTQtt2P4ky7GLRW9qAkSHdIhRUbJo7qU",
    authDomain: "kapitify.firebaseapp.com",
    projectId: "kapitify",
    storageBucket: "kapitify.appspot.com",
    messagingSenderId: "251337858046",
    appId: "1:251337858046:web:e17fcd344add7bfdd4beaf",
    measurementId: "G-4T2TKM0D8N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
