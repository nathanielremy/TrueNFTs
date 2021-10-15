import {set, ref } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js"
import {app, analytics, database} from "./firebaseInit.js";

const giveAwayLB = document.getElementsByClassName('giveAwayLB')[0];
const lightBoxButton = document.getElementsByClassName('sectionSeperator')[0];

const registrationSuccessAlert = document.querySelector(".registrationSuccessAlert");
const registrationFailAlert = document.querySelector(".registrationFailAlert");
const registerButton = document.querySelector('.registerButton');
const email = document.querySelector(".emailForm");

lightBoxButton.addEventListener('click', e => {
  e.preventDefault();
  registrationFailAlert.classList.remove('active');
  registrationSuccessAlert.classList.remove('active');
  email.value = "";
  registerButton.hidden = false;
  giveAwayLB.classList.add('active');
});

giveAwayLB.addEventListener('click', e => {
  if (e.target !== e.currentTarget) {
    return;
  };
  giveAwayLB.classList.remove('active');
});

document.querySelector('.contactForm').addEventListener('submit', registerForm);
function registerForm(e) {
  e.preventDefault();
  if (email.value === null || email.value === "") {
    registrationFailed(); return;
  }
  sendRegistrationToFirebase(email.value);
};

function sendRegistrationToFirebase(emailAddress) {
  const values = {email: emailAddress};
  set(ref(database, 'PCGiveaway/' + Date.now() + "/"), values);
  registrationSucceeded();
}

function registrationSucceeded() {
  registerButton.hidden = true;
  registrationSuccessAlert.classList.add('active');
  var counter = 0;
  var interval = setInterval(function() {
    counter++;
  // Display 'counter' wherever you want to display it.
    if (counter == 3) {
      // Display a login box
      clearInterval(interval);
      registrationSuccessAlert.classList.remove('active');
      registerButton.hidden = false;
      giveAwayLB.classList.remove('active');
    }
  }, 1000);
}

function registrationFailed() {
  registerButton.hidden = true;
  registrationFailAlert.classList.add('active');
  var counter = 0;
  var interval = setInterval(function() {
    counter++;
  // Display 'counter' wherever you want to display it.
    if (counter == 3) {
      // Display a login box
      clearInterval(interval);
      registrationFailAlert.classList.remove('active');
      registerButton.hidden = false;
    }
  }, 1000);
}
