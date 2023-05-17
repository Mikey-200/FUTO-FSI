const signupForm = document.getElementById('signupForm');
const signupButton = document.getElementById('signupButton');
const signupLoader = document.getElementById('signupLoader');

signupForm.onsubmit = function(event) {
  event.preventDefault();
  if (validateSignupForm()) {
    signupButton.disabled = true;
    signupLoader.style.display = 'block';
    setTimeout(function() {
      signupButton.disabled = false;
      signupLoader.style.display = 'none';
      alert('Sign up successful!');
      signupForm.reset();
      window.location.href = 'login.html';
    }, 2000);
  }
};

function validateSignupForm() {
  const email = document.getElementById('email').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const middleName = document.getElementById('middleName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (email === '' || firstName === '' || lastName === '' || phoneNumber === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all required fields');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return false;
  }

  return true;
}
