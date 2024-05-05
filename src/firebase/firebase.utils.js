import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged as onAuthStateChangedMain,
  signOut,
} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-RhdtWspuPCjx4OPCmuhSXSWZ_ZvBFKM',
  authDomain: 'theartstore-63c10.firebaseapp.com',
  projectId: 'theartstore-63c10',
  storageBucket: 'theartstore-63c10.appspot.com',
  messagingSenderId: '263530357776',
  appId: '1:263530357776:web:c5c897421bd0718f839695',
  measurementId: 'G-44FMR5RN2X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: 'select_account ',
});
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signUpWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
export const loginWithEmailPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
export const onAuthStateChanged = (callback) => onAuthStateChangedMain(auth, callback);
export const logout = () => signOut(auth);
