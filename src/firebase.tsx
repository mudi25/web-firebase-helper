import firebase from "firebase/app";
import "firebase/auth";
import "firebase/messaging";
import "firebase/storage";
const config = {};
const app = firebase.initializeApp(config);
export default app;
