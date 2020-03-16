import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiP2_B5IFKihp_cKqnsiJK6MniAjOQUug",
  authDomain: "expensify-1a4fc.firebaseapp.com",
  databaseURL: "https://expensify-1a4fc.firebaseio.com",
  projectId: "expensify-1a4fc",
  storageBucket: "expensify-1a4fc.appspot.com",
  messagingSenderId: "865985733038",
  appId: "1:865985733038:web:926f033bc6cb5ea2fbe83f",
  measurementId: "G-ZFLTXG1MDN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();

export { firebase, database as default };
