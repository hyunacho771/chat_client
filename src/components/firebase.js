//firebase.js

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA_nJ9NT0oGG6MNVCn7iuyNiAoMX3Rs1XM",
  authDomain: "whatsapp-mern-clone-1f1a3.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-clone-1f1a3.firebaseio.com",
  projectId: "whatsapp-mern-clone-1f1a3",
  storageBucket: "whatsapp-mern-clone-1f1a3.appspot.com",
  messagingSenderId: "1079110289299",
  appId: "1:1079110289299:web:2b9b0b0b0b0b0b0b0b0b0b",
  measurementId: "G-2ZQZQZQZQZQZQZQZQZQZQZ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
