import firebase from 'firebase';
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy1gbnEvlxMDAdmB986So9Y2yRvruxosQ",
    authDomain: "task-a5f16.firebaseapp.com",
    projectId: "task-a5f16",
    storageBucket: "task-a5f16.appspot.com",
    messagingSenderId: "286648521655",
    appId: "1:286648521655:web:2e99646cfabeb4cd438e32"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
export default database;