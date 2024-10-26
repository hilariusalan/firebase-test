// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3x4hyL2RdjqFgfdoTzI8VWHloLlplcFc",
  authDomain: "fir-d3b2c.firebaseapp.com",
  databaseURL: "https://fir-d3b2c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-d3b2c",
  storageBucket: "fir-d3b2c.appspot.com",
  messagingSenderId: "809502325776",
  appId: "1:809502325776:web:e910b39073f277933b1e95",
  measurementId: "G-C5ZS6QP8YE"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig)
export default cong