import firebase from "firebase/app";
import "firebase/auth";
import "firebase/messaging";
import "firebase/storage";
const config = {
  apiKey: "AIzaSyBN_NB_VryvTWSUrIPRybW8VBOMS01X76w",
  authDomain: "groocee-61728.firebaseapp.com",
  databaseURL: "https://groocee-61728.firebaseio.com",
  projectId: "groocee-61728",
  storageBucket: "groocee-61728.appspot.com",
  messagingSenderId: "246646073841",
  appId: "1:246646073841:web:1d51d0e27c6c9d9126bc50",
  measurementId: "G-SPG5JSQEY1"
};
const app = firebase.initializeApp(config);
export default app;
