/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VA_API_KEY,
  authDomain: process.env.VA_AUTH_DOMAIN,
  databaseURL: process.env.VA_DB_URL,
  projectId: process.env.VA_PROJECT_ID,
  storageBucket: process.env.VA_SB,
  messagingSenderId: process.env.VA_MSG_ID,
  appId: process.env.VA_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
