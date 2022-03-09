import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABpnGVYFRb3JHAAEzvQna7BCq5HlcStxw",
  authDomain: "warble-c9dde.firebaseapp.com",
  projectId: "warble-c9dde",
  storageBucket: "warble-c9dde.appspot.com",
  messagingSenderId: "970293967231",
  appId: "1:970293967231:web:e7af546d8d8cb589c5824a",
  measurementId: "G-BM5HZQ063K",
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();

console.log(analytics);

export default db;
