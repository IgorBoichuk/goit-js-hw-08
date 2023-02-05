import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(formDataInput, 500));
form.addEventListener('submit', formSubmit);

const KEY_STORAGE = 'feedback-form-state';
let savedSettings = JSON.parse(localStorage.getItem(KEY_STORAGE)) || {};

//  f20@online.ua
// dobry den everybody

function formDataInput(event) {
  savedSettings[event.target.name] = event.target.value;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(savedSettings));
}

function formSubmit(event) {
  event.preventDefault();

  if (form.email.value === '' || form.message.value === '') {
    return alert('Всі поля мають бути заповнені!!!');
  }

  const saveData = localStorage.getItem(KEY_STORAGE);
  console.log(JSON.parse(saveData));

  event.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);
  savedSettings = {};
}

function readyUserData() {
  form.email.value = savedSettings.email || '';
  form.message.value = savedSettings.message || '';
}
readyUserData();
