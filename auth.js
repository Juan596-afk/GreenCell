document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  const res = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email, password })
  });
  const data = await res.json();
  document.getElementById('signupMessage').textContent = data.message;
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const res = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  document.getElementById('loginMessage').textContent = data.message;
});