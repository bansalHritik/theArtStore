import { collection, doc, get, addDoc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../firebase.utils';

const docReference = () => collection(db, 'products');
export const add = async (productDetails) => {
  const docRef = collection(db, 'products');
  const res = await addDoc(docRef, productDetails);
};

export const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  let products = [];
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
};

export const get = async (id) => {
  const querySnapshot = await getDoc(doc(db, 'products', id));
  return { ...querySnapshot.data(), id: querySnapshot.id };
};
