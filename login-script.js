const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');
const loginLoader = document.getElementById('loginLoader');

loginForm.onsubmit = function(event) {
  event.preventDefault();
  if (validateLoginForm()) {
    loginButton.disabled = true;
    loginLoader.style.display = 'block';
    setTimeout(function() {
      loginButton.disabled = false;
      loginLoader.style.display = 'none';
      alert('Login successful!');
      loginForm.reset();
      window.location.href = 'homepage.html';
    }, 2000);
  }
};

function validateLoginForm() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (email === '' || password === '') {
    alert('Please fill in all fields');
    return false;
  }

  return true;
}
