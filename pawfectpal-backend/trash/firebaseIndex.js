//// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase-admin/app";
import { getAuth, verifyIdToken } from "firebase-admin/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbp9cWuGC7WDSt7Q19hwDuwUVEe6YHs4Q",
  authDomain: "pawfect-pals-da18a.firebaseapp.com",
  databaseURL: "https://pawfect-pals-da18a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pawfect-pals-da18a",
  storageBucket: "pawfect-pals-da18a.appspot.com",
  messagingSenderId: "458110592532",
  appId: "1:458110592532:web:13da8b1eab5a6b6a6ea901",
  measurementId: "G-WGJQ48HVDL",
};

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pawfect-pals-da18a-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const auth = admin.auth();

module.exports = { auth };

