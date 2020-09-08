import firebase from "firebase/app";
import "firebase/auth";
import "firebase/messaging";
import "firebase/storage";
const config = {
  apiKey: "AIzaSyD16cAAY_7opOGnzmlGzZo1n-dOpNL_92w",
  authDomain: "grocee-staging-255ab.firebaseapp.com",
  databaseURL: "https://grocee-staging-255ab.firebaseio.com",
  projectId: "grocee-staging-255ab",
  storageBucket: "grocee-staging-255ab.appspot.com",
  messagingSenderId: "422805330460",
  appId: "1:422805330460:web:0ce8bcba55754b77d81dd9",
  measurementId: "G-MR4P4RSYQR"
};
const app = firebase.initializeApp(config);
export default app;
