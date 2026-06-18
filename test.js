const form = document.getElementById('login-form');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const remember = document.getElementById('remember');
const errBox = document.getElementById('error-message');

const modal = document.getElementById('result-modal');
const outEmail = document.getElementById('res-email');
const outPass = document.getElementById('res-password');
const outRemember = document.getElementById('res-remember');
const closeBtn = document.getElementById('close-modal');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  errBox.classList.add('hidden');

  const mail = email.value.trim();
  const pwd = pass.value.trim();

  if (!mail || !pwd) {
    errBox.classList.remove('hidden');
    return;
  }

  outEmail.textContent = mail;
  outPass.textContent = pwd;
  outRemember.textContent = remember.checked ? 'Да' : 'Нет';

  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
  form.reset();
});

modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});