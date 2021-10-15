// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  export const firebaseConfig = {
    apiKey: "AIzaSyB-OQD8Sww8uxheoA6ieRiOnWphTyjX0g8",
    authDomain: "truenfts.firebaseapp.com",
    databaseURL: "https://truenfts-default-rtdb.firebaseio.com",
    projectId: "truenfts",
    storageBucket: "truenfts.appspot.com",
    messagingSenderId: "195648041291",
    appId: "1:195648041291:web:3104951b84edf9589c78ce",
    measurementId: "G-NW84X0SSHN"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
  export const database = getDatabase();
