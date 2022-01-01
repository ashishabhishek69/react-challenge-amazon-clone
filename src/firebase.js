import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPaA-KcLTQT-RWV39o-fRv1L5sqSRNGDk",
  authDomain: "clone-database-26cd9.firebaseapp.com",
  projectId: "clone-database-26cd9",
  storageBucket: "clone-database-26cd9.appspot.com",
  messagingSenderId: "1097633005664",
  appId: "1:1097633005664:web:f68efb02a6279974918305",
  measurementId: "G-8LV432TFFY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };