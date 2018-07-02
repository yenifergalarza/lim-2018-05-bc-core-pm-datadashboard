var login = document.getElementById('login');
var name1 = document.getElementById('name');

login.addEventListener('click', () => {
  const username = name1.value;
  localStorage.setItem('username', username);
  window.location.href = 'index.html';
});