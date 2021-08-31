/*  
Project Name: Minimal Forms With Wave Animation
Description: Minimal login and register Forms With Wave Animation. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
Tags: Mobile-friendly, All-Devices-Supported. 
*/

const formtTitle = document.querySelector('.form-wrapper h1')
const login = document.querySelector('.login')
const register = document.querySelector('.register')
const labels = document.querySelectorAll('.form-control label')
const loginCTA = document.querySelector('.login-form')
const registerCTA = document.querySelector('.register-form')
const loginBtn = document.querySelector('.login-btn')
const registerBtn = document.querySelector('.register-btn')

function submit (formSubmit) {
    loginBtn.addEventListener('click', () => {
       const userEmail = document.querySelector('.login .email')
       const userPwd = document.querySelector('.login .password')
       alert('Your Email: ' + userEmail.value + ' \n ' + 'Your Password: ' + userPwd.value)
       login.reset()
    })
    registerBtn.addEventListener('click', () => {
       const userREmail = document.querySelector('.register .email')
       const userRPwd = document.querySelector('.register .password')
       const userPwdRepeat = document.querySelector('.register .repeat-password')
       alert('Your Email: ' + userREmail.value + ' \n ' + 'Your Password: ' + userRPwd.value + ' \n ' + 'Confirm Password: ' + userPwdRepeat.value)
       register.reset()
    })
    
}
submit()

function forms (onloadforms) {
    register.classList.add('in-active')
}
forms()

loginCTA.addEventListener('click', () => {
    login.classList.remove('in-active')
    register.classList.add('in-active')
    formtTitle.innerText = 'Please Login'
})

registerCTA.addEventListener('click', () => {
    register.classList.remove('in-active')
    login.classList.add('in-active')
    formtTitle.innerText = 'Please Register'
})

/*** Animated Lables */
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})