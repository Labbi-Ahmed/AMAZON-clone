import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtIBP9Ble-f3ySXrDPb3ktlnxGe8yOB_k",
  authDomain: "challenge-45921.firebaseapp.com",
  projectId: "challenge-45921",
  storageBucket: "challenge-45921.appspot.com",
  messagingSenderId: "901997339891",
  appId: "1:901997339891:web:6d36fabcf455a2fc4ec386",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
// const auth = getAuth();

export { db, auth };
