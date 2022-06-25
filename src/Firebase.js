// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXQWJWwVdqoHDe-tGTKtkNCLpD4qt0BhI",
  authDomain: "thiendichat.firebaseapp.com",
  projectId: "thiendichat",
  storageBucket: "thiendichat.appspot.com",
  messagingSenderId: "792956286177",
  appId: "1:792956286177:web:54dfef7a28b2f871b133a0"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

 const db=getFirestore();
 const auth = getAuth();

 export {auth, db};
 export default firebase;