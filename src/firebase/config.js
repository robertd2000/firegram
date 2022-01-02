// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrKKG9YKfbCJzf9HsUxwXSldcxoUnigyw",
  authDomain: "firegramm-b4220.firebaseapp.com",
  projectId: "firegramm-b4220",
  storageBucket: "firegramm-b4220.appspot.com",
  messagingSenderId: "239482573317",
  appId: "1:239482573317:web:95c2f3b77966550f94826c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app)
const projectFirestore = getFirestore(app)
const timestamp = serverTimestamp

export {projectFirestore, projectStorage, timestamp}
    