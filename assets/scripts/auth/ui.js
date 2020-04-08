'use strict'
//removeAttr('hidden') and attr('hidden','hidden') are used in this page to show or hide html elements depending on a user's login status
const store = require('../store.js')
const playedApi = require('../played_games/api.js')


const onSignUpSuccess = () => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success') 
}

const onSignUpFail = error => {
  $('#message').text('Failed to sign up')
  $('#message').removeClass()
  $('#message').addClass('failure') 
}
const onSignInSuccess = (data) => {
   $('#message').text('Signed in successfully')
   $('#message').removeClass()
   $('#message').addClass('success')
  store.user = data.user
   $('.first').empty()
   $('.third').empty()
   const navbar = require('../templates/navbar.handlebars')
   $('.third').html(navbar)
   const userString = `<div style='font-size: 40px'> ${store.userName}<\div>` 
   $('.first').html(userString)
   $('.content').empty()
   playedApi.getGameList()
    .then((data) => store.gameList = data.played_games)

}

const onSignInFail = error => {
  $('#message').text('Failed to sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')

}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.first').empty()
  $('.third').empty()
  const signUp = require('../templates/sign_up.handlebars')
  $('.first').html(signUp)
  const signIn = require('../templates/sign_in.handlebars')
  $('.third').html(signIn)
  $('.content').empty()
}

const onSignOutFail = () => {
  $('#message').text('Failed to sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onChangePwSuccess = (data) => {
  const api = require('./api.js')
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onChangePwFail = error => {
  $('#message').text('Failed to change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const displaySignUp = () => {
   $('.content').empty()
   const showSignUp = require('../templates/sign_up_form.handlebars')
   $('.content').html(showSignUp)
}

const displaySignIn = () => {
   $('.content').empty()
   const showSignIn = require('../templates/sign_in_form.handlebars')
   $('.content').html(showSignIn)
}

const displayChangePw = () => {
   $('.content').empty()
   const showChangePw = require('../templates/change-pw.handlebars')
   $('.content').html(showChangePw)
}

module.exports = {
   onSignUpFail,
   onSignUpSuccess,
   onSignInFail,
   onSignInSuccess,
   onSignOutFail,
   onSignOutSuccess,
   onChangePwFail,
   onChangePwSuccess,
   displaySignUp,
   displaySignIn,
   displayChangePw
}
