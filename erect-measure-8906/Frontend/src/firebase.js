import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-F0RoGx6w_-5_R98vjnJy2pZoCM0eiGA",
    authDomain: "fir-react-auth-72377.firebaseapp.com",
    projectId: "fir-react-auth-72377",
    storageBucket: "fir-react-auth-72377.appspot.com",
    messagingSenderId: "242719584086",
    appId: "1:242719584086:web:248d76d21fc3251477b0f7",
    measurementId: "G-GQP9CKVRJ6"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{app,auth};