import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyBpVbOQfUp2eia-8rokbNCu7tsm11cuEpI",
  authDomain: "daring-tracer-333307.firebaseapp.com",
  projectId: "daring-tracer-333307",
  storageBucket: "daring-tracer-333307.appspot.com",
  messagingSenderId: "478802051249",
  appId: "1:478802051249:web:40e0003d08645cba016290"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();


