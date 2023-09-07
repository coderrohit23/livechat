// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAQHP9HCy1mk5Zv5pZ6K2dDE-jSHo9hxUw",
    authDomain: "social-20ea1.firebaseapp.com",
    projectId: "social-20ea1",
    storageBucket: "social-20ea1.appspot.com",
    messagingSenderId: "119289149622",
    appId: "1:119289149622:web:51da83815ca93a95594e17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()