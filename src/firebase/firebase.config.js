// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBO7Fv3h5fRv8mxtXVr08gxWlicxxiuFlY",
    authDomain: "coffee-store-5ac3b.firebaseapp.com",
    projectId: "coffee-store-5ac3b",
    storageBucket: "coffee-store-5ac3b.appspot.com",
    messagingSenderId: "912951637831",
    appId: "1:912951637831:web:c47c9ebc8f71af9b3b3e62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;