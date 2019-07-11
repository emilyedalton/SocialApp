import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: none,
    authDomain: "events-3733c.firebaseapp.com",
    databaseURL: "https://events-3733c.firebaseio.com",
    projectId: "events-3733c",
    storageBucket: "events-3733c.appspot.com",
    messagingSenderId: "421237919800",
    appId: "1:421237919800:web:5037449319cfb370"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore()
export default firebase;