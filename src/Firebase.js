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
  apiKey: "AIzaSyDgnXCri4eqABZp1MaNLuTnSVlxEWrHOGs",
  authDomain: "chat-app-f800c.firebaseapp.com",
  projectId: "chat-app-f800c",
  storageBucket: "chat-app-f800c.appspot.com",
  messagingSenderId: "530067851007",
  appId: "1:530067851007:web:1c5928174da3966e80eeca",
  measurementId: "G-V7G89VT1XN"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

 const db=getFirestore();
 const auth = getAuth();

 export {auth, db};
 export default firebase;