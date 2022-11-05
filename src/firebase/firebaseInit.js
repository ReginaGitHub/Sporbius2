import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import {initializeApp} from "firebase/app";
// import { collection, doc, getDoc, getDocs } from "firebase/firestore";
// import db from '../firebase/firebaseInit';
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
// if (user != null) {
//   const docRef = doc(db, "user", sessionStorage.id);
//   const docSnap = await getDoc(docRef);


//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }


const auth = getAuth();
var uid = null;
sessionStorage.setItem("id", "");
sessionStorage.setItem("role", "student");
sessionStorage.setItem("loggedRole", "");
import db from '../firebase/firebaseInit'; 
import { collection, getDocs } from "firebase/firestore"; 

onAuthStateChanged(auth, async (user) => { 
  if (user != null) { 
      uid = user.uid;
      sessionStorage.setItem("id", uid);
      sessionStorage.setItem("role", "student");

      const querySnapshot = await getDocs(collection(db, "users")); 
      querySnapshot.forEach((doc) => { 
        if (doc.id == sessionStorage.getItem("id")) { 
          var role = doc.data().role; 
          console.log("hello this is role", role);
          sessionStorage.setItem("loggedRole", role);
        } 
      });         
      console.log(user.uid) 
  } 
  else { 
    sessionStorage.setItem("id", "");
    sessionStorage.setItem("role", "student");
    sessionStorage.setItem("loggedRole", "");
      uid = null;
  } 
   
})



