import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBat2T884RP5kwjpD1XbwBt7SqM3l9rV1o",
  authDomain: "crwn-db-82f9e.firebaseapp.com",
  databaseURL: "https://crwn-db-82f9e.firebaseio.com",
  projectId: "crwn-db-82f9e",
  storageBucket: "crwn-db-82f9e.appspot.com",
  messagingSenderId: "226062704553",
  appId: "1:226062704553:web:e8ec20fe77b0684c7aeeb8",
  measurementId: "G-LWNWY7R154"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
