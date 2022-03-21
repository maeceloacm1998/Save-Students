
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHuQBA0glhESETfDMSllM8wc5BN97YvC0",
  authDomain: "savestudents-efcc1.firebaseapp.com",
  projectId: "savestudents-efcc1",
  storageBucket: "savestudents-efcc1.appspot.com",
  messagingSenderId: "1061686691551",
  appId: "1:1061686691551:web:c306ddebe515fe8d614b6a",
  measurementId: "G-JY5KL9K2M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase(app);

export default database;




