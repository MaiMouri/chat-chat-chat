document.addEventListener('turbolinks:load', () => {
  console.log('read')
  const loginButton = document.querySelector('#new_user > div.form-actions > input')
  loginButton.classList.add('login-button')
  const signupButton = document.querySelector('body > a:nth-child(4)') //.classList.add('guide-button')
  signupButton.classList.add('guide-button')
  const forgotButton = document.querySelector('body > a:nth-child(6)') //.classList.add('guide-button')
  forgotButton.classList.add('guide-button')
  // console.log(loginButton);
  // console.log(signupButton);
  // console.log(forgotButton);
})
