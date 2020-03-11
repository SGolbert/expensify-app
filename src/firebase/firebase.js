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

const db = firebase.database();

db.ref().set({
  name: "Seba Golb",
  age: 35,
  isSingle: true,
  location: {
    city: "Münster",
    country: "Germany"
  }
});

// db.ref().set("this is my data");

db.ref("age").set(28);
db.ref("location/city").set("Bochum");

db.ref("attributes").set({
  height: 180,
  weight: 70.5
});
