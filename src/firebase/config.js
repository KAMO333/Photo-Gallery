import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCbvTeSqbVQqonT9HzvXskiOSyzvFUL85Y",
  authDomain: "firegram-93191.firebaseapp.com",
  projectId: "firegram-93191",
  storageBucket: "firegram-93191.appspot.com",
  messagingSenderId: "560605046301",
  appId: "1:560605046301:web:ccc285322f3f29df5e48f4",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage(); // Corrected this line
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };