// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByM_2zYFlbOJygy8qFwprDN9QustMQXbc",
  authDomain: "bookart-fea4a.firebaseapp.com",
  projectId: "bookart-fea4a",
  storageBucket: "bookart-fea4a.appspot.com",
  messagingSenderId: "648063271346",
  appId: "1:648063271346:web:27f58e3ca89fb55326e4ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;