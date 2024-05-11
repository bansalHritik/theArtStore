import { collection, doc, get, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.utils';

const docReference = () => collection(db, 'products');
export const add = async (productDetails) => {
  console.log('DB', db);
  const docRef = collection(db, 'products');

  const res = await addDoc(docRef, productDetails);
  // docRef?.add(productDetails);
  console.log('Re', res);
  console.log('DocReference', docReference);
};

export const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  let products = [];
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
};
