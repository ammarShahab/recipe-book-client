// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQi3Yr9imUkv0_u_w5inrSIXUqMKBCjrw",
  authDomain: "b11a10-client-side-ashahab007.firebaseapp.com",
  projectId: "b11a10-client-side-ashahab007",
  storageBucket: "b11a10-client-side-ashahab007.firebasestorage.app",
  messagingSenderId: "850718892573",
  appId: "1:850718892573:web:c6d040214506e96157dcf4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
