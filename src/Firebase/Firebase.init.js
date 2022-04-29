// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBT1hceEOEmn0__vKrsk58_EghyUZv84E4",
    authDomain: "laptop-invoice-house.firebaseapp.com",
    projectId: "laptop-invoice-house",
    storageBucket: "laptop-invoice-house.appspot.com",
    messagingSenderId: "166818730339",
    appId: "1:166818730339:web:580250f56f17bacf6e0356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;