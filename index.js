const form = document.querySelector('.form');
const formBtn = document.querySelector('.submit');
const inputName = document.querySelector('.name');
const inputEmail = document.querySelector('.email');
const inputMessage = document.querySelector('.message');

formBtn.addEventListener('click', submitFormData);

function submitFormData() {
  console.log(inputName.value);
  console.log(inputEmail.value);
  console.log(inputMessage.value);
  form.setAttribute('action', `mailto:${inputEmail.value}`);
}

// mailto:me@mydomain.com