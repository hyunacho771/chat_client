//firebase.js

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAF8lSrD2qLHRpRsNeD0I81rGEPD9K2JF4",
  authDomain: "board-2f905.firebaseapp.com",
  databaseURL: "https://board-2f905-default-rtdb.firebaseio.com",
  projectId: "board-2f905",
  storageBucket: "board-2f905.appspot.com",
  messagingSenderId: "613775555122",
  appId: "1:613775555122:web:be05cfc82e9da6672a9a2b",
  measurementId: "G-798Y6KWRWY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
