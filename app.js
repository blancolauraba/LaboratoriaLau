const init = function() {
  document.getElementById('submit-btn').addEventListener('click', send);
}
const send = function(evt) {
  evt.preventDefault()
  evt.stopPropagation()
  let ret = validate()
  if(ret) {
    document.getElementById('userData').submit()
  }
}

const validate = function(evt) {
  let valid = true
  let name = document.getElementById('contact-name')
  let email = document.getElementById('contact-email')
  let msg = document.getElementById('contact-msg')
  if(name.value !== "" || email.value !== "" || msg.value !== "") {
    valid = false
  }
  
  document.getElementById('name-heading').textContent = `Hi ${name.value}`
  document.getElementById('player-email').textContent = email.value
  document.getElementById('player-theme').textContent = msg.value
  let formContainer = document.getElementById('form-wrapper')
  formContainer.parentElement.classList.add('hidden')
  return valid
}

document.addEventListener('DOMContentLoaded', init);