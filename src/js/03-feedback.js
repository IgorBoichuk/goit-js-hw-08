const { throttle } = require('lodash');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(formDataInput, 500));
form.addEventListener('submit', formSubmit);

const KEY_STORAGE = 'feedback-form-state';

const inputData = {};

const savedSettings = localStorage.getItem(KEY_STORAGE);
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings.email);

// if (parsedSettings.email) {
//   form.email.value = parsedSettings.email;
// }
// if (parsedSettings.message) {
//   form.message.value = parsedSettings.message;
// }

function formDataInput(event) {
  inputData[event.target.name] = event.target.value;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(inputData));
}

//  f20@online.ua
// dobry den everybody

function formSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();

  console.log('removeItem');
}
