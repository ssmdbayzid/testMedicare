// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY1bYD96t4Z8DEexkMa6fhZc9EQ6C2ZyY",
  authDomain: "medicare-817a0.firebaseapp.com",
  projectId: "medicare-817a0",
  storageBucket: "medicare-817a0.appspot.com",
  messagingSenderId: "381192860579",
  appId: "1:381192860579:web:f90fc3dfca1a176b81e016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)