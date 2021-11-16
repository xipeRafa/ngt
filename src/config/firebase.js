import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyB3s6QjYWR6EL45XSK7ANP-D_1I-DZ9eYg",
  authDomain: "taxis-e44d6.firebaseapp.com",
  projectId: "taxis-e44d6",
  storageBucket: "taxis-e44d6.appspot.com",
  messagingSenderId: "603667662446",
  appId: "1:603667662446:web:0014b763a2a4acca92487f"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();


