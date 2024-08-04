// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeivB74pvYVeCXc8JXs9n2ZSPJEpoK4jA",
  authDomain: "inventory-management-d0730.firebaseapp.com",
  projectId: "inventory-management-d0730",
  storageBucket: "inventory-management-d0730.appspot.com",
  messagingSenderId: "451919309836",
  appId: "1:451919309836:web:cb549e0ef09916a5a99229",
  measurementId: "G-GNXF5QJFX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}


