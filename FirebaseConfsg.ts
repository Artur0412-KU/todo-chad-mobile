import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb0aGgbgQmNJBds5buMF_16XByxSgYL0o",
  authDomain: "todo-chad-a384c.firebaseapp.com",
  projectId: "todo-chad-a384c",
  storageBucket: "todo-chad-a384c.firebasestorage.app",
  messagingSenderId: "718421834831",
  appId: "1:718421834831:web:e85d2d497ab734c4e23e3a",
  measurementId: "G-2V7RYGBXZ1"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);