import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged as onAuthStateChangedMain,
  signOut,
} from 'firebase/auth';
import { initializeFirebase } from '../firebase.utils';

initializeFirebase();

const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signUpWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginWithEmailPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const onAuthStateChanged = (callback) => onAuthStateChangedMain(auth, callback);

export const logout = () => signOut(auth);

// const provider = new GoogleAuthProvider();
// whenever a user interacts with the provider, we force them to select an account
// provider.setCustomParameters({
//   prompt: 'select_account ',
// });
