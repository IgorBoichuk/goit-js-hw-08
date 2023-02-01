const form = document.querySelector('.feedback-form');

console.log(form);
form.addEventListener('input', formlInputEmail);
// form.message.addEventListener('input', formlInputMessage);
form.addEventListener('submit', formSubmit);

function formlInputEmail(event) {
  const emailValue = event.target.value;
  const messageValue = event.target.value;

  console.log(event.target.value);

  // console.log('Пишу в масагу', messageValue);
  // console.log('Пишу в мило', emailValue);
}

// function formlInputMessage(event) {
//   const messageValue = event.target.value;

//   console.log('Пишу в масагу', messageValue);
// }

function formSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();

  console.log('removeItem');
}
