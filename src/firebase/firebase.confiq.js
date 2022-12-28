// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDiLcD66j3O1Lk_YtyocbIaC0Fudt2H44",
    authDomain: "mediaswag.firebaseapp.com",
    projectId: "mediaswag",
    storageBucket: "mediaswag.appspot.com",
    messagingSenderId: "404268680616",
    appId: "1:404268680616:web:a1df46ef366e3a1110099d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;