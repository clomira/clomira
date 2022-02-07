import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: String(process.env.FIREBASE_API_KEY),
  authDomain: String(process.env.FIREBASE_AUTH_ADMIN),
  projectId: String(process.env.FIREBASE_PROJ_ID),
  storageBucket: String(process.env.FIREBASE_STORAGE_BUCKET),
  messagingSenderId: String(process.env.FIREBASE_MESSAGING_SENDER_ID),
  appId: String(process.env.FIREBASE_APP_ID),
  measurementId: String(process.env.FIREBASE_MEASUREMENT_ID),
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth: firebase.auth.Auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
