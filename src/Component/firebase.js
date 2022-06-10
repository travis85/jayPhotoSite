// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvVoE5VDtuD7AXpYPxgb_KuQZbyjkyCfA",
  authDomain: "jayphotosite.firebaseapp.com",
  projectId: "jayphotosite",
  storageBucket: "jayphotosite.appspot.com",
  messagingSenderId: "1035979911529",
  appId: "1:1035979911529:web:f9de07f6e9587f6ca64df8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
