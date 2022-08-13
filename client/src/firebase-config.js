// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "<YOUR API KEY>",
  authDomain: "<YOUR AUTHDOMAIN>",
  projectId: "<YOUR PROJECTID>",
  storageBucket: "<YOUR STORAGE BUCKET>",
  messagingSenderId: "<YOUR MESSAGINGSENDERID>",
  appId: "<YOUR APPID>",
  measurementId: "<YOUR MEASUREMENTID>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);