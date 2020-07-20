import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUTYJAuD115tZCdYs-v8zPOfMh8E1BppM",
    authDomain: "todo-vue-c5d71.firebaseapp.com",
    databaseURL: "https://todo-vue-c5d71.firebaseio.com",
    projectId: "todo-vue-c5d71",
    storageBucket: "todo-vue-c5d71.appspot.com",
    messagingSenderId: "490990284332",
    appId: "1:490990284332:web:66127ced6525dffdb5eb89",
    measurementId: "G-64TV9N4KF9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();

  export default db;