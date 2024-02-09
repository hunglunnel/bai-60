// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCicEqeSZ1vqYK7sfHlk7V2rBzPP672rxU",
  authDomain: "food-app-a8666.firebaseapp.com",
  projectId: "food-app-a8666",
  storageBucket: "food-app-a8666.appspot.com",
  messagingSenderId: "641228464063",
  appId: "1:641228464063:web:377bef18f4058cd07f8b0a",
  measurementId: "G-ZN49JBTDPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
