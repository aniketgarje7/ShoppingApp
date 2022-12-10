import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBk4CUmfyHAOFM48O8tSoeoKWmYcSdMoIQ",
    authDomain: "shoppingapp-6480e.firebaseapp.com",
    projectId: "shoppingapp-6480e",
    storageBucket: "shoppingapp-6480e.appspot.com",
    messagingSenderId: "597657948527",
    appId: "1:597657948527:web:e1a7e1b8f0a01aa186189a"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app)

  export {auth,db}