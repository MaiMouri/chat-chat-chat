document.addEventListener('turbolinks:load', () => {
  console.log('read')
  const loginButton = document.querySelector('#new_user > div.form-actions > input')
  console.log(loginButton);
  loginButton.classList.add('login-button')
  const signupButton = document.querySelector('body > a:nth-child(4)') //.classList.add('guide-button')
  console.log(signupButton);
  signupButton.classList.add('guide-button')
  const forgotButton = document.querySelector('body > a:nth-child(6)') //.classList.add('guide-button')
  console.log(forgotButton);
  // const formContainer = document.querySelector('#new_user').classList.add('#new_user')
})
