import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import {initializeApp} from "firebase/app";

import {
    getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword,
    onAuthStateChanged,sendPasswordResetEmail
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaMNYpZsSjWvO5fgeNezjvVOdKkx3S0DI",
  authDomain: "sporbius-2fa7a.firebaseapp.com",
  databaseURL: "https://sporbius-2fa7a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sporbius-2fa7a",
  storageBucket: "sporbius-2fa7a.appspot.com",
  messagingSenderId: "247756429986",
  appId: "1:247756429986:web:2f4dc6db8b0ce2a4f2d5fb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();

const auth = getAuth();
var uid = null;
onAuthStateChanged(auth, (user) => {
    if (user != null) {
        uid = user.uid;
        console.log(user.uid)
    }
    else {
      uid = null;
    }
    
})
