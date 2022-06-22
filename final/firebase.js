// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0_cMB7x7pYTAsjBDjXtRcJq91SZODdLA",
  authDomain: "insta-d70ee.firebaseapp.com",
  projectId: "insta-d70ee",
  storageBucket: "insta-d70ee.appspot.com",
  messagingSenderId: "920831290200",
  appId: "1:920831290200:web:0d1269f76b0c1d6afb132d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };