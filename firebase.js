// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_D5pZvgjm8hmjOZNS2Jjv0Kx2UGFNzvI",
  authDomain: "artsvese.firebaseapp.com",
  projectId: "artsvese",
  storageBucket: "artsvese.appspot.com",
  messagingSenderId: "373875142366",
  appId: "1:373875142366:web:a9a83e339272f29c825c4f",
  measurementId: "G-GZ4B2W7VVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const zignalyFirebaseConfig = {
  apiKey: "AIzaSyCvcy9OZeMVQwVYWGbloqzuu376miD8TGc",
  authDomain: "zignaly-bb34b.firebaseapp.com",
  projectId: "zignaly-bb34b",
  storageBucket: "artsvese.appspot.com",
  messagingSenderId: "480858695453",
  appId: "1:480858695453:web:ca1ee0a583764eee7123f4"
};

// Initialize Firebase
const zignalyApp = initializeApp(zignalyFirebaseConfig, 'zignaly');
const zignalyDB = getFirestore(zignalyApp);


export { app, db, zignalyApp, zignalyDB };
