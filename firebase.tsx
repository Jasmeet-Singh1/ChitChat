import { getApp , getApps , initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxVOAKUrvETH4XQPbZIIOxRNSNk6BbwZA",
    authDomain: "saas-translator-app-d7782.firebaseapp.com",
    projectId: "saas-translator-app-d7782",
    storageBucket: "saas-translator-app-d7782.appspot.com",
    messagingSenderId: "613599788890",
    appId: "1:613599788890:web:9031f98d382cbfd48a3d63"
  };