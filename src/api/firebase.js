// import { getFirestore } from "firebase/firestore"
// import { collection, addDoc, deleteDoc, getDoc } from "firebase/firestore"; 
// import { initializeApp } from 'firebase/app';
// import firebaseConfig from "../utils/firebase";

// initializeApp(firebaseConfig)

// const db = getFirestore()

// export function () {
//   initializeApp(firebaseConfig)
// }

// export function setFav (id) {
//   return addDoc(collection(db, 'favorite'), {id})
// }

// export function removeFav (id) {
//   return deleteDoc(collection(db, 'favorite'), {id})
// }

// export function getFav () {
//   return getDoc(collection(db, 'favorite'))
// }

// export class FireBaseApp {
//   storeName
//   colection
//   db

//   constructor (storeInfo) {
//     initializeApp(firebaseConfig)
//     this.storeName = storeInfo.name
//     this.colection = storeInfo.colection
//     this.db = getFirestore()
//   }


// }
