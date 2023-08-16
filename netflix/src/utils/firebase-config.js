// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlOzYCIJLuqh96HpOe4QyEmGXC3M6U_SY",
  authDomain: "netflix-4272b.firebaseapp.com",
  projectId: "netflix-4272b",
  storageBucket: "netflix-4272b.appspot.com",
  messagingSenderId: "982640312944",
  appId: "1:982640312944:web:b66cda5821f97d53c06ab5",
  measurementId: "G-MFGCPY2M7V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
