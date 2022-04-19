/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6eEUXg803fZZqR2LHQVE5JXeqL5SxW7M",
  authDomain: "video-library-e81e3.firebaseapp.com",
  databaseURL: "https://video-library-e81e3-default-rtdb.firebaseio.com",
  projectId: "video-library-e81e3",
  storageBucket: "video-library-e81e3.appspot.com",
  messagingSenderId: "33045388060",
  appId: "1:33045388060:web:0fabd7babb42d54d2af8d9",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the database service
export const DB_Reference = getFirestore(firebaseApp);

// Get a reference google storage service
export const storage_Reference = getStorage(firebaseApp);
