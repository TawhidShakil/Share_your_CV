document.getElementById('showRegister').addEventListener('click', function() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function() {
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  window.location.href = `home.html?username=${username}`;
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('registerUsername').value;
  window.location.href = `home.html?username=${username}`;
});
