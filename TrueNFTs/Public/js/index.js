const giveAwayLB = document.getElementsByClassName('giveAwayLB')[0];
const lightBoxButton = document.getElementsByClassName('sectionSeperator')[0];

lightBoxButton.addEventListener('click', e => {
  e.preventDefault();
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
  document.querySelector('.registerButton').disabled = true;
  let email = document.querySelector(".emailForm").value;

  if (email === null || email === "") {
    registrationFailed(); return;
  }
};

function registrationFailed() {
  console.log("Email not sent");
  giveAwayLB.classList.remove('active');
}
