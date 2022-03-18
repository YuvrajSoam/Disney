import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// require("firebase/firestore");
// require('firebase/auth');
// require('firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyAfhZN0efmp6UWYQYZs1J__linu1uTIT3Y",
  authDomain: "react-http-99753.firebaseapp.com",
  databaseURL: "https://react-http-99753-default-rtdb.firebaseio.com/",
  projectId: "react-http-99753",
  storageBucket: "react-http-99753.appspot.com",
  messagingSenderId: "396927710128",
  appId: "1:396927710128:web:def19e8ecf09d419f49c75"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
firebase.firestore().settings({ experimentalForceLongPolling: true });

export { auth,  storage , provider };
export default db;