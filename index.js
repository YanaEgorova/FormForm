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


function submitFormData() {
  // document.location.href = "mailto:chrisgreg23@googlemail.com?subject="
  //     + encodeURIComponent(subject)
  //     + "&body=" + encodeURIComponent(yourMessage);
  console.log(`mailto:${inputEmail.value}?subject=${encodeURIComponent(inputName.value)}&body=${encodeURIComponent(inputMessage.value)}`);
  // document.location.href = `mailto:${inputEmail.value}?subject=${encodeURIComponent(inputName.value)}&body=${encodeURIComponent(inputMessage.value)}`;

}