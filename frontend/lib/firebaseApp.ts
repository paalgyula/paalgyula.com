// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMsUmNyLVAyFz7MqSU8E-JtDvBkHiysmc",
  authDomain: "paalgyulacom.firebaseapp.com",
  projectId: "paalgyulacom",
  storageBucket: "paalgyulacom.appspot.com",
  messagingSenderId: "717729301690",
  appId: "1:717729301690:web:b8d528fc889ca634912e83",
  measurementId: "G-MMDQJC79W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app
