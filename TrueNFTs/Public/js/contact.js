// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const database = getDatabase();

  document.querySelector('.contactForm').addEventListener('submit', submitForm);
  function submitForm(e) {
    e.preventDefault();
    document.querySelector('.sendButton').disabled = true;

    let captcha = document.querySelector(".captcha");

    if (!captcha.checked) {
      emailNotSent(); return;
    }

    let email = document.querySelector(".emailForm").value;
    let subject = document.querySelector(".subjectForm").value;
    let message = document.querySelector(".messageForm").value;

    if (email === null || email === "") {
      emailNotSent(); return;
    }
    if (subject === null || subject === "") {
      emailNotSent(); return;
    }
    if (message === null || message === "") {
      emailNotSent(); return;
    }

    sendEmailToFirebase(email, subject, message);
  }

  function sendEmailToFirebase(emailAdress, subject, message) {
    const values = {email: emailAdress, subject: subject,
    message : message};
    set(ref(database, 'emails/' + Date.now() + "/"), values);
    emailSuccessfullySent();
  };

  function emailSuccessfullySent() {
    document.querySelector(".contactForm").reset();
    const emailSuccessAlert = document.querySelector(".emailSuccessAlert");

    emailSuccessAlert.classList.add('active');
    var counter = 0;
    var interval = setInterval(function() {
      counter++;
    // Display 'counter' wherever you want to display it.
      if (counter == 3) {
        // Display a login box
        clearInterval(interval);
        emailSuccessAlert.classList.remove('active');
        document.querySelector('.sendButton').disabled = false;
      }
    }, 1000);
  }

  function emailNotSent() {
    const emailFailAlert = document.querySelector(".emailFailAlert");

    emailFailAlert.classList.add('active');
    var counter = 0;
    var interval = setInterval(function() {
      counter++;
    // Display 'counter' wherever you want to display it.
      if (counter == 3) {
        // Display a login box
        clearInterval(interval);
        emailFailAlert.classList.remove('active');
        document.querySelector('.sendButton').disabled = false;
      }
    }, 1000);
  }
