const form = document.querySelector('.form');
const formBtn = document.querySelector('.submit');
const inputName = document.querySelector('.name');
const inputEmail = document.querySelector('.email');
const inputMessage = document.querySelector('.message');

formBtn.addEventListener('click', submitFormData);

// function submitFormData() {
//   console.log(inputName.value);
//   console.log(inputEmail.value);
//   console.log(inputMessage.value);
//   form.setAttribute('action', `mailto:${inputEmail.value}`);
// }

let result;

function submitFormData() {
  // document.location.href = "mailto:chrisgreg23@googlemail.com?subject="
  //     + encodeURIComponent(subject)
  //     + "&body=" + encodeURIComponent(yourMessage);
  console.log(`mailto:${inputEmail.value}?subject=${inputName.value}&body=${inputMessage.value}`);
  document.location.href = `mailto:yanaegorova69.3@gmail.com?subject=form-data-from-my-website&body=Name:${inputName.value}-Email:${inputEmail.value}-Message:${inputMessage.value}`;
  result = `mailto:${inputEmail.value}?subject=${inputName.value}&body=${inputMessage.value}`;

}

console.log(result);