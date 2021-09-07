import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCcR8j0AfZISAl-l8mRY7X4Gygndokoprw",
  authDomain: "bedtimestories-73e38.firebaseapp.com",
  projectId: "bedtimestories-73e38",
  storageBucket: "bedtimestories-73e38.appspot.com",
  messagingSenderId: "891936209849",
  appId: "1:891936209849:web:6fa34245ce9a4aecf01468"
};
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
