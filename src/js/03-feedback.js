const form = document.querySelector('.feedback-form');

form.addEventListener('input', formlInputEmail);
form.addEventListener('submit', formSubmit);

function formlInputEmail(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const inputData = `{${email.name}: ${email.value}, ${message.name}: ${message.value}}`;
  localStorage.setItem('feedback-form-state', inputData);
}

function formSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();

  console.log('removeItem');
}
