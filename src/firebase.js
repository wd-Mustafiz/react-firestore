import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBUzqC1JH5TMJNYbbpc5jLa_fjPprDsMws",
    authDomain: "react-contact-from-53a10.firebaseapp.com",
    projectId: "react-contact-from-53a10",
    storageBucket: "react-contact-from-53a10.appspot.com",
    messagingSenderId: "521870665721",
    appId: "1:521870665721:web:5c740c40c6c1c1f72bbf28"
  })


export const db = getFirestore();

