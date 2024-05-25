import { getApp, initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

export const initializeFirebase = () =>
  firebase.apps.length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase
const app = initializeFirebase();
export const db = getFirestore(app);
